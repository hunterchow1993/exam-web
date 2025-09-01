import React from 'react';
import Socialutton from './SocialButton';

interface SocialLoginGroupProps {
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
  isMobile?: boolean;
  className?: string;
}

const SocialLoginGroup: React.FC<SocialLoginGroupProps> = ({
  onGoogleLogin,
  onFacebookLogin,
  isMobile = false,
  className = ''
}) => {
  return (
    <div className={`flex space-x-3 ${className}`}>
      <Socialutton
        provider="google"
        onClick={onGoogleLogin}
        isMobile={isMobile}
      />
      <Socialutton
        provider="facebook"
        onClick={onFacebookLogin}
        isMobile={isMobile}
      />
    </div>
  );
};

export default SocialLoginGroup;