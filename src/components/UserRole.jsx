import style from './UserRole.module.css';

const ROLE_STYLES = {
	teacher: ['Profesor', style.teacher],
	student: ['Estudiante', style.student],
	medico: ['Médico', style.medico],
	laboratorio: ['Laboratorio', style.laboratorio],
	other: ['Otros', style.other]
};
const UserRole = ({ role }) => {	
	const [roleName, classRolename] = ROLE_STYLES[role] || ROLE_STYLES.other;

	return <span className={`${style.role} ${classRolename}`}>{roleName}</span>;
};

export default UserRole;
