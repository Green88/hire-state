import React, {useEffect} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ProgressTimeline from '../components/timeline/ProgressTimeline';
import ProgressForm from '../components/progress-form/ProgressForm';

// const items = [
//   {
//     id: crypto.randomUUID(),
//     title: 'Hiring assistant interview',
//     content: '',
//     pending: false,
//     passed: true,
//     summary: 'Went well',
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Team lead screening interview',
//     content: 'No need to prepare, not technical',
//     pending: false,
//     passed: true,
//     summary: 'Went very well, great guy, interesting job',
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Team lead and CTO coding interview',
//     content: 'Some basic coding, prepare ongoing side project',
//     pending: true,
//     passed: false,
//     summary: ''
//   }
// ];

  const initialValues = {
	title: '',
	content: '',
	summary: '',
	pending: true,
	success: false,
  };

const ProgressPage = () => {
    const currentUser = localStorage.getItem('user');
    const { companyId } = useParams();
    const [searchParams] = useSearchParams();

    const progressItemsKey = `progress-${currentUser}-${companyId}`;
    const progressItemsString = localStorage.getItem(progressItemsKey);
    const progressItems = progressItemsString ? JSON.parse(progressItemsString) : [];
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

	const onProgressSubmit = (values) => {
		const newItems = [...progressItems, {...values, id: crypto.randomUUID()}];
		localStorage.setItem(progressItemsKey, JSON.stringify(newItems));
		handleClose();
	};
   
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>{`Interview process at ${searchParams.get('name')}`}</h3>
            <ProgressTimeline items={progressItems} onAdTimelineItem={handleOpen} />
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add progress step</DialogTitle>
				<DialogContent sx={{width: 500}}>
					<ProgressForm initialValues={initialValues} onSubmit={onProgressSubmit} />
				</DialogContent>
			</Dialog>
        </div>
    );
};

export default ProgressPage;
