import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Page from '../Page';
import useShopify from '@utils/hooks/useShopify.js';
import { useCart } from '@contexts/CartContext';
import { DecrementButton, IncrementButton } from '@components/Buttons';
import { formatNumber } from '@utils';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Shisha({
	backHref,
	shopifyId,
	name,
	img,
	height,
	alt,
	width,
	options,
	description,
	// price: staticPrice,
	// available: staticAvailable,
	// quantity: staticQuantity,
	meta,
}) {
	const query = `
		{
			node(id: "${shopifyId}") {
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
	// const [selectedOptions, setselectedOptions] = useState(new Map());
	const [amount, setAmount] = useState(1);
	const [selectedOptions, setselectedOptions] = useState({});
	const [adding, setAdding] = useState(false);

	const [available, setAvailable] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState('--');

	//Custom Hooks
	const { addProductToCart } = useCart();
	const { data } = useShopify(query);

	useEffect(async () => {
		const current = options?.reduce((obj, { fields }) => {
			obj[fields.name] = fields.values[0];
			return obj;
		}, {});

		setselectedOptions(current);
	}, []);

	useEffect(async () => {
		if (data) {
			const node = data.node;
			setPrice(node.price.amount);
			setAvailable(node.available);
			setQuantity(node.quantity);
		}
	}, [data]);

	function selectOption(name, option) {
		// console.log(`gewählter ${name}: ${option}`);
		setselectedOptions({ ...selectedOptions, [name]: option });
	}

	const addShisha = async () => {
		let toastId;
		try {
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
				variantId: shopifyId,
				quantity: amount,
				customAttributes,
			});

			setAdding(false);
			notify(toastId);

			console.log('Product added to 🛒');
		} catch (error) {
			console.error(error);
			setAdding(false);
			errorNote(toastId);
		}
	};

	const notify = (id) => {
		toast.success(
			(t) => (
				<div
					key={t.id}
					role='button'
					onClick={() => toast.dismiss()}
					style={{ display: 'block' }}
				>
					<div>Ware erfolgreich im 🛒 hinterlegt</div>
				</div>
			),
			{ id: id }
		);
	};

	const errorNote = (id) => {
		toast.error(
			(t) => (
				<div
					key={t.id}
					role='button'
					onClick={() => toast.dismiss()}
					style={{ display: 'block' }}
				>
					<div>Es gab ein Problem beim einfügen des Products</div>
				</div>
			),
			{ id: id }
		);
	};

	return (
		<div className='pop-in pb-4'>
			<Page
				title={name}
				metaTitle={meta.title}
				metaDescription={meta.description}
				metaImage={img}
				metaImageAlt={alt}
			>
				<div className='px-3 py-5 mb-5'>
					<Container>
						{backHref && (
							<Row className='p-3 mb-3'>
								<Link href={backHref}>
									<a className='d-flex align-items-center h5'>
										<span
											style={{
												fontSize: '1.8em',
												marginRight: '3px',
											}}
										>
											&#8592;
										</span>{' '}
										Zurück zu den Produkten
									</a>
								</Link>
							</Row>
						)}
						<Row lg={12}>
							{img && (
								<Col lg={4} className='d-flex justify-content-center'>
									<Image
										priority='high'
										loading='eager'
										src={img}
										alt={alt ? alt : `Bild von ${name}`}
										height={height ? height : 350}
										width={width ? width : 350}
									/>
								</Col>
							)}
							{description && (
								<Col lg={4} className='d-flex text-center flex-column'>
									{documentToReactComponents(description)}
								</Col>
							)}
							<Col lg={4}>
								{options && options.length > 0
									? options.map(({ fields }, i) => (
											<Row
												key={fields.name}
												className={
													'flex-column justify-content-center' +
													(i !== 0 ? 'mt-3' : '')
												}
											>
												<p className='h3 font-weight-bold align-items-center d-flex justify-content-center'>
													{fields.name}
												</p>
												<div
													role='listbox'
													className='d-flex justify-content-center flex-wrap'
												>
													{fields.values.map((option) => (
														<Button
															key={option}
															variant='outline-primary'
															role='option'
															className={
																selectedOptions[fields.name] ===
																	option && 'active'
															}
															style={{
																margin: '.25em',
															}}
															onClick={() =>
																selectOption(fields.name, option)
															}
														>
															{option}
														</Button>
													))}
												</div>
											</Row>
									  ))
									: null}
								<Row className='pt-4 justify-content-center'>
									<p className='h3 font-weight-bold'>
										{price === '--' ? '--' : formatNumber(price * amount)}
									</p>
								</Row>
								<Row className='pt-2 justify-content-center'>
									<DecrementButton setAmount={setAmount} amount={amount} />
									<span className='prod__amount'>{amount}</span>
									<IncrementButton
										setAmount={setAmount}
										amount={amount}
										max={quantity}
									/>
								</Row>
								<Row className='pt-2 justify-content-center'>
									<Button disabled={!available} onClick={addShisha}>
										In den Warenkorb
									</Button>
								</Row>
							</Col>
						</Row>
					</Container>
				</div>
			</Page>
		</div>
	);
}

// function getNewestInfo() {
// 	const price = 30;
// 	const available = true;
// 	const quantity = 3;

// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve({ price, available, quantity }), 1000);
// 	});
// }
