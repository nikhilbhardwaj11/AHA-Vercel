import { useEffect, useState } from 'react';
import Script from "next/script";
import { useSyncronyGenerateTokenQuery } from "@/redux/apiSlices/synchronyApi";

const SynchronyPayment = ({pageType}) => {

  // Usage in your component
  const {
    data: synchronyData, // Rename `data` for clarity
    isSuccess:isSynchronyDataSuccess,
    isLoading: isUserLoading,
    isError,
    error,
  } = useSyncronyGenerateTokenQuery(); // Pass the body as the `payload`

  // const [
  //   synchronyToken,
  //   { data, isSuccess, isLoading: isUserLoading, isError, error },
  // ] = useGetSynchronyAuth();



  const [data, setData] = useState();
  const [accessToken, setAccessToken] = useState(null);

  const getSynchronyToken = async () => {
    const url = 'https://api-stg.syf.com/v1/oauth2/token';
    const clientId = '8tazth6GufNLqC0WtXwSAw9d8AbNMLeS';
    const clientSecret = 'TGGsITLz35bEhDDK';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data); // This will print the token response
      setData(data)
      console.log("token====",data?.access_token);
      return data;
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    if(isSynchronyDataSuccess){
      console.log("isSynchronyDataSuccess==",synchronyData)
      getSynchronyToken();
    }

  },[isSynchronyDataSuccess]) 
  useEffect(() => {
    getSynchronyToken();
  }, []);

  useEffect(() => {
    // Ensure syfWidgetObject is defined before loading the script
    window.syfWidgetObject = {
      syfPartnerId: 'PI10000828',
      flowType: 'PDP',
      promoOverRideFlag: 'N',
    };

    console.log('syfWidgetObject initialized:', window.syfWidgetObject);
  }, [data]);

  // Define the formToJSON function
  const formToJSON = () => {
    return {
      tokenId: document.getElementById("tokenId")?.value || '',
      syfPartnerId: document.getElementById("syfPartnerId")?.value || '',
      processInd: document.getElementById("processInd")?.value || '',
      transAmount1: document.getElementById("transAmount1")?.value || '',
    };
  };

  return (
    <> 
      <Script
        src="https://www.airportappliance.com/static/version1730783876/frontend/Aha/Facelift/en_US/Synchrony_DigitalBuy/js/modal.min.js"
      />
      <Script
        src="https://spdpone.syfpos.com/mpp/UniFi.js"
        id='syfMPPScript'
        async={true}
        onLoad={() => {
          let digitalBuyModalManagerInitialized = false;

          // Initialization function
          const digitalBuyModalManagerInitCallback = () => {
            if (digitalBuyModalManagerInitialized) return;
            digitalBuyModalManagerInitialized = true;

            // Ensure DigitalBuyModalManager is defined before calling init
            if (typeof DigitalBuyModalManager !== 'undefined') {
              DigitalBuyModalManager.init({
                formId: 'dbuyform3',
                postbackFormId: 'postbackform',
                formToJsonObj: formToJSON(),
              });
              console.log("DigitalBuyModalManager initialized successfully");
            } else {
              console.error('DigitalBuyModalManager is not defined');
            }
          };

          console.log('UniFi.js script loaded');
          if (document.readyState === 'complete') {
            digitalBuyModalManagerInitCallback();
          } else {
            window.addEventListener('load', digitalBuyModalManagerInitCallback);
          }

          return () => {
            window.removeEventListener('load', digitalBuyModalManagerInitCallback);
          };
        }}
      />
      <main id="maincontent" className="page-main">
        <div className="checkout-container">
          <div id="checkout-loader" className="loading-mask">
            <div className="loader">
              <img
                src="https://www.airportappliance.com/static/version1730783876/frontend/Aha/Facelift/en_US/images/loader-1.gif"
                alt="Loading..."
              />
            </div>
          </div>

          <div id="dbuymodel3"></div>
          <form name="dbuyform3" id="dbuyform3">
            <input type="hidden" id="processInd" name="processInd" value="3"/>
            <input type="hidden" name="syfPartnerId" id="syfPartnerId" value='PI10000828' />
            <input type="hidden" id="transAmount1" name="transAmount1" value="25928.78"/>
          </form>

          <form
            name="postbackform"
            id="postbackform"
            method="post"
            action={pageType ==="checkout"? "http://localhost:3000/checkout": ""}
          >
            <input type="hidden" id="tokenId" name="tokenId" value='1930769ca9ePI1000082897306'/>
          </form>
        </div>
      </main>
    </>
  );
}

export default SynchronyPayment;