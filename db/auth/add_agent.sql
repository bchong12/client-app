insert into agent (email, name, password)
values (${email}, ${name}, ${password});

select email, name, agent_id from agent
where email = ${email};