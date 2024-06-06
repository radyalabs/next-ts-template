import type { CredentialResponse } from 'google-one-tap';

import useGoogleSSO from '@/components/ui/GoogleSSO/index.hooks';
import { noop } from '@/utils';

import type { GoogleSSOProps } from './index.types';

declare global {
  interface Window {
    handleCredentialResponse?: (credentials: CredentialResponse) => void;
  }
}

const GoogleSSO = (props: GoogleSSOProps) => {
  const {
    callback = noop,
    clientId,
    className,
    locale = '',
    uxMode = 'popup',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    logo_alignment = 'left',
    shape = 'rectangular',
    size = 'large',
    theme = 'outline',
    type = 'standard',
    text = 'signin_with',
    width = 200,
  } = props;
  const { basePath } = useGoogleSSO();

  if (typeof window !== 'undefined') {
    window.handleCredentialResponse = callback;
    // Client-side-only code
  }

  return (
    <div className={className}>
      <div
        id="g_id_onload"
        data-client_id={clientId}
        data-context="signin"
        data-ux_mode={uxMode}
        data-nonce=""
        data-login_uri={`${basePath}/login`}
        data-auto_select="false"
        data-itp_support="true"
        data-callback="handleCredentialResponse"
      />
      <div
        className="g_id_signin"
        data-type={type}
        data-shape={shape}
        data-theme={theme}
        data-text={text}
        data-size={size}
        data-logo_alignment={logo_alignment}
        data-width={String(width)}
        data-locale={locale}
      />
    </div>
  );
};

export default GoogleSSO;
