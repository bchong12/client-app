update meeting_entry
set name = ${name}, date = ${date}, notes = ${notes}
where meeting_id = ${meeting_id};