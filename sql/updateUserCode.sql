-- psql -d carky -a -f updateUserCode.sql

CREATE OR REPLACE FUNCTION update_user_code(codeArg character(36), emailArg character varying(256))
RETURNS void AS
$$
BEGIN

    EXECUTE '
        UPDATE users SET code = $1
        WHERE email = $2
    '
    USING codeArg, emailArg;
    
END;
$$
LANGUAGE plpgsql;
