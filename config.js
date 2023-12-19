var config = {
	development: {
			  user: 'postgres', // env var: PGUSER
			  database: 'blogdb', // env var: PGDATABASE
			  password: 'Qw12aszx', // env var: PGPASSWORD
			  host: 'localhost', // Server hosting the postgres database
			  port: 5432, // env var: PGPORT
			  max: 10, // max number of clients in the pool
			  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
	},
	production: {
			  user: '', // env var: PGUSER  - YOUR UEA username
			  database: '', // env var: PGDATABASE  - YOUR UEA username
			  password: '', // env var: PGPASSWORD  - YOUR UEA password
			  host: 'cmpstudb-01.cmp.uea.ac.uk', // Server hosting the postgres database
			  port: 5432, // env var: PGPORT
			  max: 10, // max number of clients in the pool
			  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
	},
	
};
module.exports = config;