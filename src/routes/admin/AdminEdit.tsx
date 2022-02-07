import React, {
	useState,
	useEffect,
	useContext,
	FC
} from 'react';
import {
	collection,
	getDocs,
	doc,
	query,
	documentId,
	where,
	updateDoc,
	serverTimestamp
} from 'firebase/firestore';
import {
	useParams
} from "react-router-dom";
import { db } from '../../firebase';
import { projectsContext } from '../../context';

import { StyledForm } from '../../components/styled/StyledForm'
import { StyledPageTitle } from '../../components/styled/StyledH2';

import { useNavigate } from 'react-router';

import { str2bool } from './AdminHome';

const AdminCreate: FC = () => {
	const { projects, setProjects } = useContext(projectsContext);
	let { id } = useParams<"id">();
	const projectsCollectionRef = query(collection(db, 'projects'), where(documentId(), '==', id));
	const [projectData, setProjectData] = useState<any>({});
	const navigate = useNavigate();

	useEffect(() => {
		const getProjects = async () => {
			const data = await getDocs(projectsCollectionRef);
			setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getProjects();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const editProject = async (e: any) => {
		e.preventDefault();
		const currentProjectId: any = id;
		const editProjectRef = doc(db, 'projects', currentProjectId);
		await updateDoc(editProjectRef, projectData);

		navigate('/admin');
	};

	return (
		<>
			<StyledForm onSubmit={editProject}>
				<StyledPageTitle>edit database entry</StyledPageTitle>
				{projects.map((project: any) => {
					console.log(project)
					return (
						<>
							<div key={project.id}>
								<div id='edit_id' key={'edit_id'}>
									<label
										htmlFor='entry_id'
										className='create'
									>document iD</label>
									<input
										id='entry_id'
										type={'text'}
										name='entry[id]'
										value={project.id}
										readOnly />
								</div>
								<div id='create_title' key={'create_title'}>
									<label
										htmlFor='entry_title'
										className='create'
									>title</label>
									<input
										id='entry_title'
										type={'text'}
										name='entry_title'
										defaultValue={project.title}
										onChange={(event) => {
											setProjectData({ title: (event.target as HTMLInputElement).value })
										}} />
								</div>
								<div id='create_repository' key={'create_repository'}>
									<label
										htmlFor='entry_repository'
										className='create'
									>repository</label>
									<input
										id='entry_repository'
										type={'text'}
										name='entry[repository]'
										defaultValue={project.repository_link}
										onChange={(event) => {
											setProjectData({ repository_link: (event.target as HTMLInputElement).value })
										}} />
								</div>
								<div id='create_description' key={'create_description'}>
									<label
										htmlFor='entry_description'
										className='create'
									>description</label>
									<input
										id='entry_description'
										type={'text'}
										name='entry[description]'
										defaultValue={project.description}
										onChange={(event) => {
											setProjectData({ description: (event.target as HTMLInputElement).value })
										}} />
								</div>
								<div id='create_site'>
									<label
										htmlFor='entry_site'
										className='create'
									>site</label>
									<input
										id='entry_site'
										type={'text'}
										name='entry[site]'
										defaultValue={project.website}
										onChange={(event) => {
											setProjectData({ website: (event.target as HTMLInputElement).value })
										}} />
								</div>
								<div id='create_case' key={'ceate_case'}>
									<label
										htmlFor='entry_case'
										className='create'
									>case study</label>
									<select
										id='entry_case'
										name='entry[case]'
										defaultValue={project.case_study.toString()}
										onChange={(event) => {
											setProjectData({ case_study: str2bool((event.target as HTMLSelectElement).value) })
										}}>
										<option value={'true'}>true</option>
										<option value={'false'}>false</option>
									</select>
								</div>
								<div id='create_visible' key={'create_visible'}>
									<label
										htmlFor='entry_visible'
										className='create'
									>visible</label>
									<select
										id='entry_visible'
										name='entry[visible]'
										defaultValue={project.visible.toString()}
										onChange={(event) => {
											setProjectData({ visible: str2bool((event.target as HTMLSelectElement).value) })
										}}>
										<option value={'true'}>true</option>
										<option value={'false'}>false</option>
									</select>
								</div>
								<div id='create_submit' key={'create_submit'}>
									<input
										type={'submit'}
										value={'Edit Project'}
									/>
								</div>
							</div>
						</>
					);
				})}
			</StyledForm>
		</>
	);
}

export default AdminCreate