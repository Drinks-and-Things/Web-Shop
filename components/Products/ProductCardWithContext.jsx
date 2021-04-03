import React, { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
// import useSWR from 'swr';

import CartButton from '../Buttons/CartButton.jsx';
import useShopify from '@utils/hooks/useShopify.js';
import { useCart } from '@contexts/CartContext';
import { useOptions } from '@contexts/OptionsContext';
import { formatNumber } from '@utils';
import { DecrementButton, IncrementButton } from '@components/Buttons';

const ProductCard = ({ product, ...props }) => {
	const query = `
	{
		node(id: "${product.shopifyId}") {
			... on ProductVariant {
				compareAtPriceV2 {
					amount
				}
				price: priceV2 {
					amount
				}
				available: availableForSale
				notInStock: currentlyNotInStock
				quantity: quantityAvailable
			}
		}
	}
	`;
	// const [optionsDialog, setOptionsDialog] = useState(false);
	// const [selectedOptions, setselectedOptions] = useState({});
	// const [toastIds, setToastIds] = useState([]);
	const [amount, setAmount] = useState(1);
	const [adding, setAdding] = useState(false);

	const [available, setAvailable] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState('--');

	//Custom hooks
	const { modalOptions, modalOpen, modalSelectedOptions } = useOptions();
	const { addProductToCart } = useCart();
	const { data } = useShopify(query);
	const [selectedOptions] = modalSelectedOptions;

	// const { data, error } = useSWR(query, fetcher, {
	// 	refreshInterval: 100,
	// 	dedupingInterval: 0,
	// 	revalidateOnMount: true,
	// 	refreshWhenHidden: true,
	// });

	useEffect(async () => {
		if (data) {
			const n = data.node;
			setPrice(n.price.amount);
			setAvailable(n.available);
			if (available === true && quantity === 0) {
				setQuantity(100);
			} else {
				setQuantity(n.quantity);
			}
			// const p = data?.data?.node;
			// setPrice(p.price.amount);
			// setAvailable(p.available);
			// setQuantity(p.quantity);
		}
	}, [data]);

	useEffect(async () => {
		console.log('select');
		if (modalOpen[0] === false) {
			console.log('confirmed');
			await confirmAdd();
		}
	}, [modalOpen[0]]);

	const notify = (id) => {
		toast.success(
			() => (
				<div role='button' onClick={() => toast.dismiss()} style={{ display: 'block' }}>
					<div>Ware erfolgreich im 🛒 hinterlegt</div>
				</div>
			),
			{ id: id }
		);
	};

	const errorNote = (id) => {
		toast.error(
			() => (
				<div role='button' onClick={() => toast.dismiss()} style={{ display: 'block' }}>
					<div>Es gab ein Problem beim einfügen des Products</div>
				</div>
			),
			{ id: id }
		);
	};

	async function confirmAdd() {
		let toastId;

		try {
			console.log(selectedOptions);

			const customAttributes =
				selectedOptions !== {}
					? Object.entries(selectedOptions).map(([key, value]) => ({
							key,
							value,
					  }))
					: [];

			setAdding(true);
			toastId = toast.loading(() => (
				<div style={{ display: 'block' }}>
					<div>Ware wird hinzugefügt</div>
				</div>
			));

			await addProductToCart({
				variantId: product.shopifyId,
				quantity: amount,
				customAttributes,
			});

			setAdding(false);
			notify(toastId);

			console.log('item added to 🛒');
		} catch (error) {
			console.error(error);
			setAdding(false);
			errorNote(toastId);
		}
	}

	const handleAdd = async () => {
		if (product.options) {
			// const [, setOptions] = modalOptions;
			const setOptions = modalOptions[1];
			const [optionsModalOpen, setOptionsModalOpen] = modalOpen;
			setOptions(product.options);
			setOptionsModalOpen(true);

			// setModalOpen(true);
		} else {
			await confirmAdd();
		}
	};

	return (
		<>
			<Card {...props}>
				<Card.Body>
					<div
						style={{
							display: 'flex',
							margin: '0 auto 10px',
							minWidth: '225px',
							maxWidth: '225px',
							minHeight: '300px',
							maxHeight: '300px',
							maxWidth: '100%',
							justifyContent: 'center',
						}}
					>
						{product.img && (
							<Image
								quality={100}
								loading='lazy'
								height='300'
								width='215'
								src={product.img}
								// alt={product.alt}
							/>
						)}
					</div>
					{/* <Card.Title>{product.brand}</Card.Title> */}
					<Card.Text className='h5'>{product.name}</Card.Text>
					<h3 className='text-left'>
						{price === '--' ? '--' : formatNumber(price * amount)}
					</h3>
					{available === true ? (
						<div className='text-right'>
							<div
								className='float-left'
								style={{ display: 'inline-flex', width: '70%' }}
							>
								<DecrementButton setAmount={setAmount} amount={amount} />
								<span className='prod__amount'>{amount}</span>
								<IncrementButton
									setAmount={setAmount}
									amount={amount}
									max={quantity}
								/>
							</div>
							<CartButton onClick={handleAdd} />
						</div>
					) : (
						<span
							style={{ height: '38px' }}
							className='d-flex justify-content-center align-items-center'
						>
							Nicht Lagernd
						</span>
					)}
				</Card.Body>
			</Card>
		</>
	);
};

// async function fetcher(query) {
// 	const data = await fetch('https://drinksandthing.myshopify.com/api/2021-01/graphql.json', {
// 		method: 'POST',
// 		mode: 'cors',
// 		headers: {
// 			'X-Shopify-Storefront-Access-Token': '0c9d98f10a589a4eff916c68fac0dfb9',
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ query }),
// 	});
// 	return await data.json();
// }

// ProductCard.propTypes = {
// 	product: PropTypes.shape({
// 		id: PropTypes.number,
// 		name: PropTypes.string,
// 		price: PropTypes.number | PropTypes.number,
// 		photo: PropTypes.string,
// 		brand: PropTypes.string,
// 		instock: PropTypes.bool,
// 	}),
// };

export default ProductCard;

// async function getNewestData(id) {
// 	// if(!id){
// 	// 	return
// 	// }

// 	try {
// 		const data = await fetch('https://drinksandthing.myshopify.com/api/2020-07/graphql.json', {
// 			method: 'POST',
// 			mode: 'cors',
// 			headers: {
// 				'X-Shopify-Storefront-Access-Token': '0c9d98f10a589a4eff916c68fac0dfb9',
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ query }),
// 		});

// 		return (await data.json()).data.node;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// useEffect(async () => {
// 	if (data) {
// 		toastIds.forEach((toastId) => {
// 			notify(toastId);
// 		});
// 		setPrice(data.price.amount);
// 	} else {
// 		const toastId = toast.loading(() => (
// 			<div role='button' onClick={() => toast.dismiss()} style={{ display: 'block' }}>
// 				<div>Ware wird hinzugefügt</div>
// 			</div>
// 		));
// 		setToastIds([...toastIds, toastId]);
// 	}
// }, [data]);
