import React from 'react';
import toast from 'react-hot-toast';

const OneUser = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:1000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You are unauthorized')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully added an admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button> : 'Admin'}</td>
            <td><button className='btn btn-xs btn-error'>Remove User</button></td>
        </tr>
    );
};

export default OneUser;