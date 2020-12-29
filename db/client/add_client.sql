insert into client (name, phone_number, email, agent_id)
values (${name}, ${phoneNumber}, ${email}, ${agentId});

select client_id from client
where name = ${name}
order by client_id desc;
