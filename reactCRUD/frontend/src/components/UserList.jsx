import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import UserTableRow from "./UserTableRow";
import configData  from "../config.json";
const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {// fac un request cu axios de tip get si iau utilizatorii si dupa ce i-am luat ii dau lui data table. si apelez user table row
    console.log("primesc datele")
	axios
	.get(configData.SERVER_URL)
	.then(({ data }) => {
		setUsers(data['users']);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return users.map((res, i) => {
	return <UserTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Nume</th>
			<th>Prenume</th>
			<th>Email</th>
			<th>Telefon</th>
			<th>CNP</th>
			<th>Data nastere</th>
			<th>Data adaugare</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default UserList;