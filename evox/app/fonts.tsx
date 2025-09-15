import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    {
      path: '../public/assets/fonts/Poppins-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Black.woff2',
      weight: '800',
      style: 'normal',
    }
  ],
})