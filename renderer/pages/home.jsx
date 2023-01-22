import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';
import { x } from '@xstyled/emotion';

// Pages: Home (/)
export default function Home() {
  const [iframeLoading, setIframeLoading] = useState(true);

  return (
    <x.div
      transition='all 1s ease-in-out'
      display='flex'
      w='100%'
      h='100%'
      position='fixed'
      flexDirection='column'
      alignItems='center'
      justifyContent='end'
      borderRadius={6}
      bg='#191919'
      userSelect='none'
      boxShadow='0px -1px 10px 1px #0000002e'
      className='dragBox'
    >
      <x.div
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        w='100%'
      >
        <x.img ml={2} src='/images/logo.png' w='20px' h='20px' alt='Logo' />
        <x.p color='gray-300' fontWeight='500' fontSize='sm'>
          Heraxia - Minimapa
        </x.p>
        <x.div>
          <x.button
            transition='all 0.2s ease'
            outline='none !important'
            className='noDragBox'
            bg={{ _: 'gray-800', hover: 'gray-700' }}
            p={2}
            onClick={() => ipcRenderer.send('minimize')}
          >
            <x.svg
              w='15px'
              h='15px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6 11H18V13H6V11Z' fill='rgb(156 163 175)' />
            </x.svg>
          </x.button>
          <x.button
            transition='all 0.2s ease'
            outline='none !important'
            className='noDragBox'
            bg={{ _: 'gray-800', hover: 'gray-700' }}
            p={2}
            onClick={() => ipcRenderer.send('toggle-maximize-window')}
          >
            <x.svg
              width='15px'
              height='15px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M8 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V16M21 8V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H16M21 16V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H16'
                stroke='rgb(156 163 175)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </x.svg>
          </x.button>
          <x.button
            transition='all 0.2s ease'
            outline='none !important'
            className='noDragBox'
            bg={{ _: 'gray-800', hover: 'gray-700' }}
            p={2}
            onClick={() => ipcRenderer.send('close-me')}
            borderRadius='0 6px 0 0'
          >
            <x.svg
              width='15px'
              height='15px'
              viewBox='0 0 512 512'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>close</title>
              <g
                id='Page-1'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
              >
                <g
                  id='Combined-Shape'
                  fill='rgb(156 163 175)'
                  transform='translate(91.581722, 91.581722)'
                >
                  <path
                    d='M298.666667,4.26325641e-14 L328.836556,30.1698893 L194.587,164.418 L328.836556,298.666667 L298.666667,328.836556 L164.418,194.587 L30.1698893,328.836556 L9.9475983e-14,298.666667 L134.248,164.418 L7.10542736e-14,30.1698893 L30.1698893,4.26325641e-14 L164.418,134.248 L298.666667,4.26325641e-14 Z'
                    transform='translate(164.418278, 164.418278) rotate(-360.000000) translate(-164.418278, -164.418278) '
                  ></path>
                </g>
              </g>
            </x.svg>
          </x.button>
        </x.div>
      </x.div>
      {iframeLoading ? (
        <x.iframe
          className='noDragBox'
          src='http://172.96.172.37:10053/'
          width='100%'
          height='100vh'
          w='100%'
          h='100vh'
          frameBorder='0'
          overflow='hidden'
          borderRadius='0 0 6px 6px'
          onLoad={(e) => {
            try {
              const iframe = e.frames[0];
              iframe.throwerror();
            } catch {
              setIframeLoading(true);
            }
          }}
        />
      ) : (
        <x.div
          className='noDragBox'
          h='100vh'
          w='100%'
          bg='#000'
          color='gray-300'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          spaceY={2}
          borderRadius='0 0 6px 6px'
        >
          <x.span fontWeight='400'>
            Ops, algo aconteceu recarregue o mapa!
          </x.span>
          <x.button
            fontWeight='400'
            borderRadius={4}
            color='gray-400'
            outline='none !important'
            bg={{ _: 'gray-800', hover: 'gray-700' }}
            px={4}
            py={2}
            onClick={() => window.location.reload()}
          >
            Recarregar mapa
          </x.button>
        </x.div>
      )}
    </x.div>
  );
}
