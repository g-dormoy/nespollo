db.createUser(
    {
        user: "nespollo",
        pwd: "pw4nespollo",
        roles: [
            {
                role: "readWrite",
                db: "nespollo"
            }
        ]
    }
);
