# terminal-simple-server-demo
To be used for demoing basic bash commands using ssh

## To install dependencies, from within the root folder run
```bash
npm i
```

## To start up the app
1. Write a .env to define the PORT variable where the server will be listening.
2. Launch the app `npm start`.
3. Open your browser to `localhost:PORT` where PORT is as defined in the .env file. 

## To start up the app with only the script

- Run the following command from your terminal
```bash
curl https://raw.githubusercontent.com/InManuBytes/terminal-simple-server-demo/master/example_shell_scripts/localScript > ~/testScript
```

- Navigate to your home folder `cd ` RET and modify permissions
```bash
chmod 755 testScript
```

- Execute script
```bash
./testScript
```

- Open your favorite web browser to [localhost:3000](http://localhost:3000)