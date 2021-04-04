import React, { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';

import CartButton from '../Buttons/CartButton.jsx';
import useShopify from '@utils/hooks/useShopify.js';
import { useCart } from '@contexts/CartContext';
import { formatNumber } from '@utils';
import { DecrementButton, IncrementButton } from '@components/Buttons';
import OptionsDialog from '@components/OptionsDialog/OptionsDialog.jsx';
import DescriptionDialog from '@components/DescriptionDialog/DescriptionDialog.jsx';
import { InfoIcon } from '@components/Icons/index.js';
import { Col } from 'react-bootstrap';

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
	const [amount, setAmount] = useState(1);
	const [adding, setAdding] = useState(false);

	const [available, setAvailable] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState('--');
	const [modalShow, setModalShow] = useState(false);
	const [descModalShow, setDescModalShow] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState({});

	//Custom hooks
	const { addProductToCart } = useCart();
	const { data } = useShopify(query);

	useEffect(async () => {
		if (data) {
			const node = data.node;
			setPrice(node.price.amount);
			setAvailable(node.available);
			if (available === true && quantity === 0) {
				setQuantity(100);
			} else {
				setQuantity(node.quantity);
			}
		}
	}, [data]);

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
			// console.log(product.options);
			// console.log(selectedOptions);
			const lineItem =
				product.options === undefined
					? {
							variantId: product.shopifyId,
							quantity: amount,
					  }
					: {
							variantId: product.shopifyId,
							quantity: amount,
							customAttributes: selectedOptions,
					  };

			setAdding(true);
			toastId = toast.loading(() => (
				<div style={{ display: 'block' }}>
					<div>Ware wird hinzugefügt</div>
				</div>
			));

			await addProductToCart(lineItem);

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
		// console.log('clicked add');
		if (product.options) {
			setModalShow(true);
			// setModalOpen(true);
		} else {
			await confirmAdd();
		}
	};

	return (
		<>
			<Card
				style={{
					minWidth: '270px',
				}}
				{...props}
			>
				<Card.Body className='p-3'>
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
								unoptimized={true}
								// quality={100}
								loading='lazy'
								height='300'
								width='215'
								src={product.img}
								alt={product.alt}
							/>
						)}
					</div>
					{/* <Card.Title>{product.brand}</Card.Title> */}
					{product.description && (
						<>
							<div className='d-flex flex-row-reverse'>
								<button
									type='button'
									className='py-2 pl-2 pr-1'
									onClick={() => {
										setDescModalShow(true);
									}}
								>
									<InfoIcon color='#000' className='float-right ' />
								</button>
							</div>
							<DescriptionDialog
								description={product.description}
								modalShow={descModalShow}
								setModalShow={setDescModalShow}
							/>
						</>
					)}
					<Col sm='12' className='p-0'>
						<Card.Text className='h5'>{product.name}</Card.Text>
					</Col>
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
			{product.options ? (
				<OptionsDialog
					options={product.options}
					modalShow={modalShow}
					setModalShow={setModalShow}
					setSelectedOptions={setSelectedOptions}
					confirmAdd={confirmAdd}
					selectedOptions={selectedOptions}
				/>
			) : null}
		</>
	);
};

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
