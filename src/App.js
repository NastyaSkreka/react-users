import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [searchInput, setInput] = React.useState('');
    const [invites, setInvites] = React.useState([]);
    const [success, setSuccess] = React.useState(false);
    

    React.useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((json) => setUsers(json.data))
        .catch(err => {
            console.warn(err);
        })
        .finally(() => setLoading(false))
    }, [])

   const onSeachInput = (event) => {
        setInput(event.target.value)
   }

   const onClickInvite = (id) => {
    if (invites.includes(id)){
        setInvites(prev => prev.filter(_id => _id !== id));
    } else {
        setInvites(prev => [...prev, id]);
    }
   }
   
   const onClickSendInvites = () => {
    setSuccess(true)
   }


  return (
    <div className="App">
        {
            success ? ( 
                <Success count={invites.length} /> 
            ) : (
                <Users 
                items={users} 
                isLoading={isLoading}
                onSeachInput={onSeachInput}
                searchInput={searchInput}
                onClickInvite={onClickInvite}
                invites={invites}
                onClickSendInvites={onClickSendInvites} />
            )
        }
    </div>
  );
}

export default App;


// шаги 


// 7. показать блок успех и вывести количество приглашенных 
// стейт саксесс и терным условием указываем что рендерить 



// в компонент сакссес передать длину инвайтс

// условие для рендера кнопки 
