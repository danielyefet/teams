export default function Advert() {
  return (
    <a
      className="flex items-center justify-center"
      href="https://amzn.to/3X5PMiy"
    >
      <iframe
        className="md:hidden"
        src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=288&l=ur1&category=audible&banner=04ZXHZ2ADJGHG67D9BG2&f=ifr&linkID=28ab210d34e2c2aa585fee740a816189&t=teamsmemes-21&tracking_id=teamsmemes-21"
        width="320"
        height="50"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
      ></iframe>
      <iframe
        className="hidden md:block"
        src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=audible&banner=0XB0WJ44XVACQ4JCSP82&f=ifr&linkID=ab06ffcba9937dd7905d7754c1641331&t=teamsmemes-21&tracking_id=teamsmemes-21"
        width="728"
        height="90"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
      />
    </a>
  );
}
