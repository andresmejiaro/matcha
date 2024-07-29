#!/bin/bash

#!/bin/bash
# Check if database exists
DB_EXISTS=$(mysql -u root -e "SHOW DATABASES LIKE 'wordpress';" | grep "wordpress" > /dev/null; echo "$?")
# If it doesn't exist, create it
if [ $DB_EXISTS -ne 0 ]; then
    echo "Creating database..."
    mysql -u root  -e "CREATE DATABASE wordpress;
            GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
            ON wordpress.*
            TO $@localhost
IDENTIFIED BY 'password';
FLUSH PRIVILEGES;"
    # Add other setup SQL commands here
fi
