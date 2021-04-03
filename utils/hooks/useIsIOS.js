import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
// import 'dayjs/locale/de-at';

// dayjs.locale('de-at');

export default function useIsIOS() {
	const [isIOS, setIsIOS] = useState({});

	useEffect(() => {
		setIsIOS(checkForIOS());
		return () => console.log('CLEANUP INSTALL PROMPT', isIOS);
	}, []);

	return isIOS;
}

function checkForIOS() {
	if (navigator.standalone) {
		return false;
	}

	const today = dayjs().toDate();
	const lastPrompt = dayjs(localStorage.getItem('installPrompt'));
	const days = dayjs(today).diff(lastPrompt, 'days');

	const ua = window.navigator.userAgent;
	const isApple = ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);
	const isIPad = !!ua.match(/iPad/i);
	const isIPhone = !!ua.match(/iPhone/i);
	const isIOS = isIPad || isIPhone;
	// const webkit = !!ua.match(/WebKit/i);
	// const isSafari = isIOS && webkit && !ua.match(/CriOS/i);

	const prompt = (isNaN(days) || days > 30) && (isIOS || isApple); //&& isSafari

	if (prompt && 'localStorage' in window) {
		localStorage.setItem('installPrompt', today);
	}

	return { isIOS, isSafari, prompt };
}

// const myDate = new Date();
// const fullDate = myDate.toLocaleDateString('de-AT');
// const time = myDate.toLocaleTimeString('de-AT');
// const [month, date, year] = myDate.toLocaleDateString('de-AT').split('.');
// const [hour, minute, second] = myDate.toLocaleTimeString('de-AT').split(/:| /);
