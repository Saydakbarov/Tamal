import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'white',
	boxShadow: 24,
	p: 4,
	borderRadius: '8px',
};

export default function ShopButton({ data }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, phone } = e.target.elements;

		const token = '6584006100:AAH_2utbVJox7SaK1Uj5TPEHmn_4i-zAnaE';
		const chat_id = -1001844075757;
		let text = '';

		data?.forEach((e) => {
			text =
				text +
				`{ %0A protuct name: ${e.product_title_ru}; %0A category name: ${e.category_name_ru} %0A count: ${e.count} %0A }, %0A `;
		});

		text =
			text + `client name: ${name.value} %0A client number: ${phone.value}`;

		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

		let api = new XMLHttpRequest();
		api.open('GET', url, true);
		api.send();

		name.value = null;
		phone.value = null;
		handleClose();
		localStorage.removeItem('data');
	};

	return (
		<Box sx={{ mt: 2 }}>
			<Button
				sx={{
					background: '#E2FF7F',
					color: 'black',
					'&:hover': {
						backgroundColor: '#01466A',
						color: 'white', // Yoki kerakli rangni qo'shishingiz mumkin
					},
					display: 'inline-block',
					margin: '5px',
				}}
				onClick={handleOpen}>
				Buy now
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography
						sx={{
							fontSize: '20px',
							textAlign: 'center',
							fontWeight: 'bold',
						}}>
						Оформить Заказ
					</Typography>

					<form onSubmit={handleSubmit}>
						<TextField
							label='Name'
							name='name'
							fullWidth
							required
							sx={{ mt: 2 }}
						/>
						<TextField
							label='Phone'
							name='phone'
							fullWidth
							required
							sx={{ mt: 2 }}
						/>

						<Button
							type='submit'
							variant='contained'
							color='primary'
							sx={{
								background: 'black',
								color: 'white',
								mt: 2,
								'&:hover': {
									backgroundColor: 'black',
								},
							}}
							fullWidth>
							Отправлять
						</Button>
					</form>
				</Box>
			</Modal>
		</Box>
	);
}
