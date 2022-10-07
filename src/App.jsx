import UsersList from './components/UsersList';

const USERS = [
    {
        id: 0,
        name: 'Pablo Castellanos',
        active: true,
        role: 'teacher'
    },
    {
        id: 1,
        name: 'Jose Miguel Fernandez',
        active: true,
        role: 'teacher'
    },
    {
        id: 2,
        name: 'Cesar Perez',
        active: true,
        role: 'student'
    },
    {
        id: 3,
        name: 'Tomas Amayo',
        active: true,
        role: 'medico'
    },
    {
        id: 4,
        name: 'Andreita Quevedo',
        active: false,
        role: 'laboratorio'
    }
];

const App = () => 
	<UsersList initialUsers={USERS} />

export default App;
