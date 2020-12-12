select * from client
where agent_id = ${agent_id}
order by client_id desc;