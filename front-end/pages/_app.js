

import 'styles/globals.css';





export default App;

function App({ Component, pageProps }) {

    return (
        <> 
           <div className="bg-dark">
            { /*<Navigation2/> */  }
            </div>
      
            
                
              
                {
                    <Component {...pageProps} />
                }
        
        </>
    );
}
