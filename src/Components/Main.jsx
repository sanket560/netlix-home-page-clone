import React from 'react'
import Card from './Card'
function Main() {
  return (
    <div className='text-white ml-14 mt-10 text-xl'>
      {/* popular on netflix */}
      <p>Popular on Netflix</p>
      <div className='flex'>
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeJS8fp-Pty_LeKOpX-5ViMUyz2MvbCX4vJCblq3Js4C558mk5ffq0P-LpDAtSVGkR1HJCOfXtGj5dkGdLCXzwXFHFbWip-V7oIu3Jawe9xyB8qpQDj1NWdLfPD5hbckXW4v.jpg?r=4e8'
          title='The Elephant Whisperers'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWSE0WpvJvHAPkamy91-JTeD4WmYejd2UgqMK3qUMfQ2oRarw3HW-ryBChaooHzLlisb1yLGdvRXiKwoXxFBESSCsyD3Waun64U.jpg?r=1ae'
          title='Chiller Party'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQBSaR1vnkA1QGvSv778qAVhMrKpV4-ZKBFlhVHG6PEWy37o6sM_N8qqtPe0A68fgRSrDxKNbeJ3f_tfRnh4GQwFVfhMZ53ZfdisL0fSSuLP1B63xsmiNILNQtgdCid9tDrV.jpg?r=bb7'
          title='Minal Murali'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe-EAKTogupa1E7zwgnUEanp8EbVO2W6bRTy5PAesvwajYgmwwuj0d41sX5igToHLbKnv_dZRHfeLpqzQ-tqboOwU4T-W-oFXaY.jpg?r=409'
          title='The Croods'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZvtHkUnnnXk49Ilf2b4VTjrIpuJmx3bmCW-G_2hYJtM72NP1yoU43m6ZRZWchGpbQGSihKMBSOpkoeQ88YHKWI-G42hv1wzkl0.jpg?r=bb2'
          title='Jodhaa Akbar'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZxCmuY1dDFjSqnnci2rVBO2Fcnxc7rFnnUBIJcvixfvcdhm5vhJTH3JD8qYBCNAN5QKTlxbV70EYRz4mgibFqZxx8SjVWWNM74.jpg?r=3f4'
          title='Zindagi Na Milegi Dobara'
        />
      </div>
      {/* crime movies */}
      <p className='mt-8'>Crime Films</p>
      <div className='flex'>
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRft0kqF-iGFuWzC5xSyTdAmpc3wtzlqmKKW8_PuYKOSqVRyUL6gIkzcTc5au0LnUKQr44MQP4nmAX0ep1-LM7RC8hLUx18reK57Jbm_xEX9zncBVRKaB9xtNKJjNywOLgPC.jpg?r=bee'
          title='Thar'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbtfFsv9x_as7eHgH0B9-elEi_R3xEmmg1oL_EbezbbOx48JLSlNKE1uPpGd8XFcHROtrFAYLooNJK9FIUMFBFMRPaYFsfXNBmU.jpg?r=a71'
          title='2 Guns'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU-nHCl8RsTYsfynT_MnXGHiQn4HHs7_e-23RR-jNvMHoJgwWgy4KTZPTmV-iNVjHAeqJ647BemK8eAc9HODv6fxCID09T277XQ.jpg?r=c4d'
          title='Article 15'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWWLv8mUKAZbcO4cIsmrFY3eyTg8Sl69e2fR-pDTTETYLp9zWBHx1mPzxGOalbJwtm1GxoUNqpRHIV4tnW6nnhFbx3jd4FzNnk8.jpg?r=9a6'
          title='No On Killed Jessica'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXcD6Iw14HcF1ibmEcq5ZYdqARlYX1mWgl8wKhRCuypQ1Vqr8hBX-m0NRBbCq_5jteHO15FBDzzYVRa86kD87Eog8eAQ0ibXJEs.jpg?r=5e1'
          title='Haider'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUFZNIkt85IpjT2o7OOoqM5hPOlCatrOaMEAWYuQYN5FS7MmMlf746yw8O_UzXun6qx14BqmNw2MPZMTOvl7iLDbXITfB3JSCqDhseBT45QQepa7HHK5x2IRxdGLXKeHLes-.jpg?r=248'
          title='The Harder They Fall'
        />
      </div>
      <p className='mt-8'>Action</p>
      <div className='flex'>
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTNaZO_ZbHtOjnK93o2OVw7QfdI4UdtRJsqSQhcGdV1kGAnxVaSMOTe_Ej1noH33cr9he1ErEbE5-HYYCS_7qQOvEGpuYt3vcAo.jpg?r=88e'
          title='Jumanji: The Next Level'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYsFT7jKoQvfhae3GE8OZ6zVGJipa_5JF-i530lYqXz8ww5GtQkQr4b17x5jU4uqcqAUpHt9S5QfOhfDM8qTCEN3ClmHhT6drnz0RRLv8PsIqNHuKCZn9gDGDEOg9WtmZNCK.jpg?r=75c'
          title='The Old Gaurd'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSLPVz352-RTwdUHmERXPE9jYP6sk_wTg7m92c2h_s-sV33VMT67yLQXJek9O2xdk7HJObneJoZYhgDakDfo6nv8CtZ_0RHbkls.jpg?r=969'
          title='Spider-Man'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaFnGeWS-xuKnKlhDGSDO7PWfS6_fpGGBYeQYpW3rAkr2tHKY8ull5WPPTPwIEUdANPKsUK1To5S0Psd4kHDxsN9seBHkZioOOM.jpg?r=157'
          title='The Dark Night'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeX2MsjOq61GYA9PPSKbibtiljYlSvJ9rr87rhM3cfMZGteKVmcREuIj4-rgoZrBbywtPMD0Sx8_Qv5aaLjFro4Z6k-2SMDDEgI.jpg?r=60a'
          title='Bahubali'
        />
        <Card
          img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY-hEFPD6A75T0bGz5LHoA-dgm7Jj9gOQ54sO06CwUf_XrGaszGv2uLeU02LHqGWL1kFwQTkdU_ZNG6jo1d9wGNZ0xn32juuwZM.jpg?r=de4'
          title='RRR (Hindi)'
        />
      </div>
      <div className='blur relative'>
        {/* crime movies */}
        <p className='mt-8'>Crime Films</p>
        <div className='flex'>
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRft0kqF-iGFuWzC5xSyTdAmpc3wtzlqmKKW8_PuYKOSqVRyUL6gIkzcTc5au0LnUKQr44MQP4nmAX0ep1-LM7RC8hLUx18reK57Jbm_xEX9zncBVRKaB9xtNKJjNywOLgPC.jpg?r=bee'
            title='Thar'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbtfFsv9x_as7eHgH0B9-elEi_R3xEmmg1oL_EbezbbOx48JLSlNKE1uPpGd8XFcHROtrFAYLooNJK9FIUMFBFMRPaYFsfXNBmU.jpg?r=a71'
            title='2 Guns'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU-nHCl8RsTYsfynT_MnXGHiQn4HHs7_e-23RR-jNvMHoJgwWgy4KTZPTmV-iNVjHAeqJ647BemK8eAc9HODv6fxCID09T277XQ.jpg?r=c4d'
            title='Article 15'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWWLv8mUKAZbcO4cIsmrFY3eyTg8Sl69e2fR-pDTTETYLp9zWBHx1mPzxGOalbJwtm1GxoUNqpRHIV4tnW6nnhFbx3jd4FzNnk8.jpg?r=9a6'
            title='No On Killed Jessica'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXcD6Iw14HcF1ibmEcq5ZYdqARlYX1mWgl8wKhRCuypQ1Vqr8hBX-m0NRBbCq_5jteHO15FBDzzYVRa86kD87Eog8eAQ0ibXJEs.jpg?r=5e1'
            title='Haider'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUFZNIkt85IpjT2o7OOoqM5hPOlCatrOaMEAWYuQYN5FS7MmMlf746yw8O_UzXun6qx14BqmNw2MPZMTOvl7iLDbXITfB3JSCqDhseBT45QQepa7HHK5x2IRxdGLXKeHLes-.jpg?r=248'
            title='The Harder They Fall'
          />
        </div>
        {/* popular on netflix */}
        <p>Popular on Netflix</p>
        <div className='flex'>
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeJS8fp-Pty_LeKOpX-5ViMUyz2MvbCX4vJCblq3Js4C558mk5ffq0P-LpDAtSVGkR1HJCOfXtGj5dkGdLCXzwXFHFbWip-V7oIu3Jawe9xyB8qpQDj1NWdLfPD5hbckXW4v.jpg?r=4e8'
            title='The Elephant Whisperers'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWSE0WpvJvHAPkamy91-JTeD4WmYejd2UgqMK3qUMfQ2oRarw3HW-ryBChaooHzLlisb1yLGdvRXiKwoXxFBESSCsyD3Waun64U.jpg?r=1ae'
            title='Chiller Party'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQBSaR1vnkA1QGvSv778qAVhMrKpV4-ZKBFlhVHG6PEWy37o6sM_N8qqtPe0A68fgRSrDxKNbeJ3f_tfRnh4GQwFVfhMZ53ZfdisL0fSSuLP1B63xsmiNILNQtgdCid9tDrV.jpg?r=bb7'
            title='Minal Murali'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe-EAKTogupa1E7zwgnUEanp8EbVO2W6bRTy5PAesvwajYgmwwuj0d41sX5igToHLbKnv_dZRHfeLpqzQ-tqboOwU4T-W-oFXaY.jpg?r=409'
            title='The Croods'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZvtHkUnnnXk49Ilf2b4VTjrIpuJmx3bmCW-G_2hYJtM72NP1yoU43m6ZRZWchGpbQGSihKMBSOpkoeQ88YHKWI-G42hv1wzkl0.jpg?r=bb2'
            title='Jodhaa Akbar'
          />
          <Card
            img='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZxCmuY1dDFjSqnnci2rVBO2Fcnxc7rFnnUBIJcvixfvcdhm5vhJTH3JD8qYBCNAN5QKTlxbV70EYRz4mgibFqZxx8SjVWWNM74.jpg?r=3f4'
            title='Zindagi Na Milegi Dobara'
          />
        </div>
      </div>
    </div> 
  )
}

export default Main;