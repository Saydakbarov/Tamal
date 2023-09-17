import { Badge, Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import Modal from '@mui/material/Modal';
import { Close, Shop } from '@mui/icons-material';
import ProductsCard from './ProductsCard';
import BasketCard from './BasketBoxCard';
import ShopButton from '../SingleProduct/ShopButton';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '95%',
	boxShadow: 24,
	p: 2,
	background: '#f2f2f2',
	border: 'none',
	borderRadius: '4px',
};
export default function BasketBox({ lang }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const data = JSON.parse(localStorage.getItem('data')) || [];

	return (
		<Box>
			<IconButton onClick={handleOpen}>
				<Badge
					badgeContent={data.length !== 0 ? data.length : 0}
					color='primary'>
					<Shop color='action' />
				</Badge>
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Box
						sx={{ textAlign: 'end', cursor: 'pointer' }}
						component={'div'}
						onClick={handleClose}>
						<Close />
					</Box>

					{data.length === 0 ? (
						<Typography sx={{ fontSize: '34px', textAlign: 'center' }}>
							Ma'lumot Yo'q
						</Typography>
					) : (
						<BasketCard data={data} lang={lang} />
					)}

					<Box sx={{ textAlign: 'end' }}>
						{/* <Button
              sx={{
                background: "#01466A",
                "&:hover": {
                  backgroundColor: "#E2FF7F", // Yoki kerakli rangni qo'shishingiz mumkin
                  color: "black",
                },
                display: "inline-block",
                margin: "5px",
                fontSize: "12px",
                color: "white",
              }}
            >
              send
            </Button> */}
						<ShopButton data={data} />
					</Box>
				</Box>
			</Modal>
		</Box>
	);
}
