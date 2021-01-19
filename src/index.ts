import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';

const twitter = new ShareButtonTwitter('.btn-twitter', 'http://www.youtube.com/rodrigobranas');
twitter.bind()
const facebook = new ShareButtonFacebook('.btn-facebook', 'http://www.youtube.com/rodrigobranas');
facebook.bind()
const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'http://www.youtube.com/rodrigobranas');
linkedin.bind()
