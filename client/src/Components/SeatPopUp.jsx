import React from 'react'
import './SeatPopUp.css'
function SeatPopUp() {
  return (
    <div>   <div id="popup-wrap">
    {/* <!-- Subscribe Trigger --> */}
         <label className='popup-button' for='popup-trigger'></label>
  
    {/* <!-- Subscribe Content --> */}
    <input className='popup-trigger' id='popup-trigger' type='checkbox'/>
    <div className='popup-bg'>
              <label className='popup-bg-close' for='popup-trigger' id='popup-close'></label>
              <div className='popup-form'>
                  <label className='popup-form-close' for='popup-trigger' id='popup-close'></label>
                  <div className='popup-inner'>
                      {/* <!-- Opt-In Subscribe --> */}
                      <span className="popup-title">Please Enter Your Seat Number </span>
                   
                      <br/><br/>
                      <form action=
                      'https://feedburner.google.com/fb/a/mailverify' id='subscribe'
                       method='post'
                        onsubmit=
                        'window.open(&apos;https://feedburner.google.com/fb/a/mailverify?uri=YOUR_SUBSCRIBE_ID&apos;, &apos;popupwindow&apos;, &apos;scrollbars=yes,width=550,height=520&apos;);return true'
                       target='popupwindow'>
                          <input name='uri' type='hidden' value='YOUR_SUBSCRIBE_ID'/>
                          <input name='loc' type='hidden' value='en_US'/>
                          <input id='mailbox' name='email' onblur='if (this.value == &quot;&quot;) {this.value = &quot;Enter your email...&quot;;}' onfocus='if (this.value == &quot;Enter your email...&quot;) {this.value = &quot;&quot;}' required='' type='text' value=''/>
                          <input id='subbutton' title='' type='submit' value='Claim'/>
                      </form>
                      <br />
                    
                  </div>
              </div>
              {/* <!-- .popup-form --> */}
    </div>
    {/* <!-- .popup-bg --> */}
      </div>
      {/* <!-- #popup-wrap --> */}
      </div>
  )
}

export default SeatPopUp