import { x } from '@xstyled/emotion';
import { shell } from 'electron';

// Pages: Loading (/loading)
export default function Loading() {
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
      transform='scale(0.94)'
      bg='#191919'
      userSelect='none'
      boxShadow='0px -1px 10px 1px #0000002e'
      className='dragBox'
    >
      <x.div
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        spaceY={2}
      >
        <x.img src='/images/logo.png' w='180px' h='180px' alt='Logo' />
        <x.h1 fontSize='2xl' fontWeight='400' color='gray-300'>
          Heraxia - Minimapa
        </x.h1>
      </x.div>
      <x.div
        color='gray-400'
        display='flex'
        alignItems='center'
        justifyContent='center'
        spaceX={2}
        mt={6}
      >
        <x.svg
          xmlns='http://www.w3.org/2000/svg'
          width='1.5rem'
          height='1.5rem'
          viewBox='0 0 24 24'
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeDasharray={15}
            strokeDashoffset={15}
            strokeLinecap='round'
            strokeWidth={2}
            d='M12 3a9 9 0 019 9'
          >
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              dur='0.3s'
              values='15;0'
            />
            <animateTransform
              attributeName='transform'
              dur='1.5s'
              repeatCount='indefinite'
              type='rotate'
              values='0 12 12;360 12 12'
            />
          </path>
        </x.svg>
        <x.span fontWeight='400'>Carregando...</x.span>
      </x.div>
      <x.div
        display='flex'
        alignItems='center'
        justifyContent='center'
        w='600px'
        textAlign='center'
        mt={20}
        pb={14}
        spaceX={4}
      >
        <x.div>
          <x.p
            className='noDragBox'
            bg={{ _: '#191919', hover: 'gray-700' }}
            transition='all 0.2s ease'
            cursor='pointer'
            border='1px solid'
            borderColor='gray-700'
            w='100%'
            p={4}
            borderRadius={6}
            color='gray-400'
            onClick={() => shell.openExternal('https://discord.gg/heraxia')}
          >
            <x.svg
              w='20px'
              h='20px'
              viewBox='0 -28.5 256 256'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid'
            >
              <g>
                <path
                  d='M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z'
                  fill='rgb(209 213 219)'
                  fillRule='nonzero'
                ></path>
              </g>
            </x.svg>
          </x.p>
        </x.div>
        <x.div>
          <x.p
            className='noDragBox'
            bg={{ _: '#191919', hover: 'gray-700' }}
            transition='all 0.2s ease'
            cursor='pointer'
            border='1px solid'
            borderColor='gray-700'
            w='100%'
            p={4}
            borderRadius={6}
            color='gray-400'
            onClick={() =>
              shell.openExternal('https://www.youtube.com/@heraxiamc')
            }
          >
            <x.svg
              height='20px'
              width='20px'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 461.001 461.001'
              xmlSpace='preserve'
            >
              <g>
                <path
                  fill='#FFF'
                  d='M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z'
                />
              </g>
            </x.svg>
          </x.p>
        </x.div>
      </x.div>
    </x.div>
  );
}
