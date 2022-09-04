import style from './UserRole.module.css';
const UserRole = ({ role }) => {
	const ROLE_STYLES = {
		teacher: ['Profesor', style.teacher],
		student: ['Estudiante', style.student],
		medico: ['Médico', style.medico],
		other: ['Otros', style.other]
	};
	const [roleName, classRolename] = ROLE_STYLES[role] || ROLE_STYLES.other;

	return <span className={`${style.role} ${classRolename}`}>{roleName}</span>;
};

export default UserRole;
