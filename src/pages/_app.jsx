import React, { memo } from 'react';

import GlobalStyle from '../styles/global';

const ShortLinkApp = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default memo(ShortLinkApp);
