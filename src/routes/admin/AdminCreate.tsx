import React, {
	useState,
} from 'react';
import {
	collection,
	addDoc,
	serverTimestamp
} from 'firebase/firestore';
import { db } from '../../firebase'

import { useNavigate } from 'react-router-dom';
import { StyledForm } from '../../components/styled/StyledForm'
import { StyledPageTitle } from '../../components/styled/StyledH2';

import { str2bool } from './AdminHome';

const AdminCreate = () => {
	const projectsCollectionRef = collection(db, 'projects');
	const [title, setTitle] = useState<string>('');
	const [repoLink, setRepoLink] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [visibility, setVisibility] = useState<string | boolean>(true);
	const [caseStudy, setCaseStudy] = useState<string | boolean>(true);
	const navigate = useNavigate();

	const createProject = async (e: any) => {
		e.preventDefault();
		await addDoc(projectsCollectionRef, {
			title: title,
			repository_link: repoLink,
			description: description,
			content: content,
			case_study: caseStudy,
			visible: visibility,
			timestamp: serverTimestamp()
		});

		navigate('/admin');
	};

	return (
		<>
			<StyledForm onSubmit={createProject}>
				<StyledPageTitle>create database entry</StyledPageTitle>
				<div id='create_title'>
					<label
						htmlFor='entry_title'
						className='create'
					>title*</label>
					<input
						id='entry_title'
						type={'text'}
						name='entry[title]'
						onChange={(event) => {
							setTitle(event.target.value);
						}} />
				</div>
				<div id='create_repository'>
					<label
						htmlFor='entry_repository'
						className='create'
					>repository</label>
					<input
						id='entry_repository'
						type={'text'}
						name='entry[repository]'
						onChange={(event) => {
							setRepoLink(event.target.value);
						}} />
				</div>
				<div id='create_description'>
					<label
						htmlFor='entry_description'
						className='create'
					>description*</label>
					<input
						id='entry_description'
						type={'text'}
						name='entry[description]'
						onChange={(event) => {
							setDescription(event.target.value);
						}} />
				</div>
				<div id='create_content'>
					<label
						htmlFor='entry_content'
						className='create'
					>content</label>
					<input
						id='entry_content'
						type={'text'}
						name='entry[content]'
						onChange={(event) => {
							setContent(event.target.value);
						}} />
				</div>
				<div id='create_case'>
					<label
						htmlFor='entry_case'
						className='create'
					>case study</label>
					<select
						id='entry_case'
						name='entry[case]'
						onChange={(event) => {
							setCaseStudy(str2bool(event.target.value));
						}}>
						<option value={'true'}>true</option>
						<option value={'false'}>false</option>
					</select>
				</div>
				<div id='create_submit'>
					<input
						type={'submit'}
						value={'Create Project'}
					/>
				</div>
			</StyledForm>
		</>
	);
}

export default AdminCreate