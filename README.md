# WalletChat Widget Demo

Live version at: https://marketplacedemo.walletchat.fun/NFTMarketPlace

Youtube demo: https://www.youtube.com/watch?v=SlqW3zGNsto

<img src="220930 widget demo.gif" width="350" title="widget demo">

(click > to play gif)

## Who is this for

- You are a web3 web app that wishes to integrate messaging functionality
- Replace current user-to-user or user-to-app messaging workflow which happens inside discord / telegram
- Provide a much better UX that links directly to the user's wallet, which they are already using to interact with your dapp
- Provide a much more secure experience than having to share one's wallet id inside discord or clicking external links
- Enable users to communicate without leaving your web app (increasing engagement & time spent within the app)
- Differentiate yourself from competition still stuck in the web 2.5 world

## Roadmap

- Support token-gated group messaging (available in our web app)
- Enhanced spam filtering, conditional messaging permissions
- User-to-dapp support helpdesk, dapp-to-user announcements
- User analytics dashboard
- Optional message notifications inside email / telegram
- ...and much more

Talk to us to discuss the details of this and your requirements!

## Custom Integration Steps

1) Install NPM package "react-wallet-chat-v0"

```yarn add react-wallet-chat-v0``` if using yarn instead of npm

2) On any page you wish to have the chat widget active, import: 

```import {WalletChatWidget} from 'react-wallet-chat-v0'```

```import 'react-wallet-chat-v0/dist/index.css'```

And include in your page source: 

```<WalletChatWidget />```

### Custom Endpoints for our Customers
If we have provided a custom web app for you, it can be specified with the local .env variable:

```REACT_APP_APP_URL=<custom>.walletchat.fun```


### Chat With Owner 
To implement a "Chat With Owner" type feature as demonstrated at https://marketplacedemo.walletchat.fun/NFTMarketPlace :

1) Ensure your NPM package is up to date (yarn upgrade react-wallet-chat-v0)
2) Declare the functions:

```
const [widgetState, setWidgetState] = useState({})
```

3) Set the address with setOwnerAddr() and widget open status with setIsWidgetOpen() upon your desired event, for example: 

```
<Tooltip title="Chat With Owner">
  <FileSearchOutlined
    onClick={() => {
        setWidgetState(
        {
           ...widgetState, 
          chatAddr: '0x17FA0A61bf1719D12C08c61F211A063a58267A19',
          isOpen: true
        }
      )
      }
    }
  />
</Tooltip>
 ```
4) Include the WalletChat Widget with parameters:

```<WalletChatWidget widgetState={widgetState}/>```

## We're looking forward to working with you!

Feel free to reach out to contact@walletchat.fun for any help, or on Twitter https://twitter.com/wallet_chat

Enquire for our API documentation.

Developed with ❤ by https://www.walletchat.fun/
