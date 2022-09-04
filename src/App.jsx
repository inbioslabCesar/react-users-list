import UsersList from './components/UsersList';

const USERS = [
    {
        name: 'Pablo Castellanos',
        active: true,
        role: 'teacher'
    },
    {
        name: 'Jose Miguel Fernandez',
        active: true,
        role: 'teacher'
    },
    {
        name: 'Cesar Perez',
        active: false,
        role: 'student'
    },
    {
        name: 'Tomas Amayo',
        active: false,
        role: 'medico'
    }
];

const App = () => (
	<UsersList users={USERS}>
		<h1>Lista de Usuarios</h1>
	</UsersList>
);

export default App;
