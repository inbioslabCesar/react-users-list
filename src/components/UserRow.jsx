import { useContext } from 'react';
import UserRole from './UserRole';
import { UsersContext } from '../lib/contexs/UsersContext';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ id, name, active, role }) => {
	const { toggleUserActive } = useContext(UsersContext);

	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button onClick={() => toggleUserActive(id)}>
					{active ? 'Desactivar ' : 'Activar'}
				</button>
			</div>
		</div>
	);
};
export default UserRow;
