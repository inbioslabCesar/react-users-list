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
        active: true,
        role: 'student'
    },
    {
        name: 'Tomas Amayo',
        active: true,
        role: 'medico'
    },
    {
        name: 'Andreita Quevedo',
        active: true,
        role: 'tecnico'
    }
];

const App = () => 
	<UsersList users={USERS}>
		<h1>Lista de Usuarios</h1>
	</UsersList>

export default App;
