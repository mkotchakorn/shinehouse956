import { useRef, useEffect } from 'react';
import _ from 'lodash';
import { contact } from '../assets/data/contact/contact';

export default function SiteFooter() {
  const MessengerRef = useRef();

  useEffect(() => {
    if (MessengerRef.current) {
      MessengerRef.current.setAttribute('page_id', '102407155368190');
      MessengerRef.current.setAttribute('attribution', 'biz_inbox');
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v17.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const line = _.find(contact.get_in_touch, { name: 'line' });
  const blog = 'site-menu-blog bg-white h-10 w-10 rounded-full flex items-center justify-center my-2 cursor-pointer';

  return (
    <div className='fixed right-6 bottom-4 z-20'>
      <div className='flex flex-col'>
        <div id='facebook-message'>
          <div id='fb-root'></div>
          <div ref={MessengerRef} id='fb-customer-chat' className='fb-customerchat'></div>
        </div>
        <div id='line' className={`${blog}`}>
          <div onClick={() => window.open(line.path, '_blank', 'noreferrer')} className='w-6 h-6 text-black'>
            {line.icon}
          </div>
        </div>
      </div>
    </div>
  );
}
