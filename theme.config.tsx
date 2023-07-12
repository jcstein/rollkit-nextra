import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1078 12.7369C21.4429 12.406 21.6564 11.9243 21.5268 11.2835C21.4178 10.7475 20.9657 10.2993 20.4419 10.2491C20.0943 10.2157 19.8011 10.3077 19.4828 10.4752C19.4828 10.4752 18.6536 9.99353 17.5269 9.33599C18.578 8.72444 19.5789 8.14663 20.3538 7.69842C20.5339 7.5936 20.8397 7.38428 21.1078 7.12061C21.4429 6.78975 21.6564 6.30809 21.5268 5.66727C21.4178 5.13127 20.9657 4.68305 20.4419 4.63289C20.0943 4.59944 19.8011 4.69142 19.4828 4.85894C19.4828 4.85894 11.4248 0.168375 11.3287 0.113729C11.228 0.0593821 11.1319 0.00891711 11.0062 0.000556033C10.8637 -0.00780504 10.7338 0.0799862 10.6293 0.138812C7.24965 2.10755 3.39221 4.3522 0.485838 6.03994C0.397748 6.0901 0.314137 6.14475 0.230228 6.1991C0.108694 6.27853 0.00836107 6.38334 0.00836107 6.52996C0.00836107 6.67657 0.108993 6.76855 0.192603 6.83155C0.272033 6.8859 0.305776 6.9068 0.473296 7.00325C1.11829 7.3801 2.75587 8.33087 4.47706 9.33181C3.0488 10.161 1.68356 10.9568 0.481657 11.6562C0.393568 11.7064 0.309957 11.761 0.226048 11.8153C0.104513 11.8948 0.00418054 11.9996 0.00418054 12.1462C0.00418054 12.2928 0.104812 12.3848 0.188423 12.4478C0.267853 12.5022 0.301596 12.5231 0.469116 12.6195C1.11411 12.9963 2.75169 13.9471 4.47287 14.9481C3.04462 15.7773 1.67938 16.5731 0.477477 17.2724C0.389387 17.3226 0.305776 17.3773 0.221867 17.4316C0.100333 17.511 0 17.6158 0 17.7625C0 17.9091 0.100631 18.001 0.184242 18.0641C0.263672 18.1184 0.297415 18.1393 0.464935 18.2358C1.77583 18.9981 7.11975 22.1054 9.06728 23.2446C9.25989 23.3578 9.6663 23.5922 9.87562 23.6887C10.2692 23.8729 10.7717 24.0321 11.1907 23.9944C11.7981 23.9443 12.2251 23.6552 12.7906 23.3244C14.7674 22.1726 18.3314 20.0955 20.3544 18.9267C20.5345 18.8219 20.8403 18.6126 21.1084 18.3489C21.4435 18.0181 21.657 17.5364 21.5274 16.8956C21.4184 16.3596 20.9663 15.9114 20.4425 15.8612C20.0949 15.8278 19.8017 15.9197 19.4834 16.0873C19.4834 16.0873 18.6541 15.6056 17.5275 14.9481C18.5786 14.3365 19.5795 13.7587 20.3544 13.3105C20.5303 13.214 20.8361 13.0047 21.1084 12.7369H21.1078ZM1.00094 6.52996C1.00512 6.42932 1.05111 6.37916 1.12247 6.33735L10.7425 0.742004C10.9016 0.649734 11.1026 0.649734 11.2618 0.742004L18.9217 5.19398C18.9217 5.19398 13.318 8.45659 11.2492 9.65431C11.0817 9.75076 10.7634 9.95172 10.646 10.0521C10.4952 10.1778 10.3862 10.3411 10.3319 10.5421C10.2271 10.9524 10.4158 11.2707 10.6377 11.3964C10.9685 11.5806 11.2325 11.4466 11.2283 11.279C10.9814 11.1868 10.9225 10.99 10.956 10.7848C10.9894 10.6048 11.1277 10.4665 11.3496 10.4331C11.6762 10.3829 11.9737 10.5881 12.0531 11.0109C12.1325 11.4212 11.9778 11.7732 11.7097 11.97C11.1611 12.372 10.4448 12.1626 9.95057 11.8736C9.49818 11.6096 2.82246 7.72738 1.12636 6.73898C1.05529 6.693 0.996461 6.62999 1.00064 6.52966L1.00094 6.52996ZM18.9175 16.4265C18.9175 16.4265 13.3138 19.6891 11.245 20.8868C11.0775 20.9833 10.7592 21.1842 10.6419 21.2846C10.4911 21.4103 10.3821 21.5736 10.3277 21.7746C10.2229 22.1849 10.4116 22.5032 10.6335 22.6289C10.9644 22.8131 11.2283 22.6791 11.2241 22.5115C10.9772 22.4193 10.9184 22.2225 10.9518 22.0173C10.9853 21.8373 11.1235 21.699 11.3454 21.6656C11.6721 21.6154 11.9695 21.8206 12.0489 22.2434C12.1283 22.6537 11.9737 23.0057 11.7055 23.2025C11.157 23.6045 10.4406 23.3951 9.94639 23.1061C9.494 22.8421 2.81828 18.9599 1.12218 17.9715C1.05111 17.9297 0.99228 17.8709 0.996461 17.7705C1.00064 17.6699 1.04663 17.6197 1.11799 17.5779L5.04232 15.2953C4.85808 15.1864 8.08277 17.067 9.0628 17.6406C9.25541 17.7538 9.66182 17.9882 9.87114 18.0847C10.2647 18.2689 10.7673 18.4281 11.1862 18.3904C11.7936 18.3403 12.2206 18.0512 12.7862 17.7204C14.0006 17.0126 17.1375 15.1867 16.9533 15.2953L18.9175 16.4262V16.4265ZM11.245 15.2706C11.0775 15.367 10.7592 15.568 10.6419 15.6683C10.4911 15.794 10.3821 15.9574 10.3277 16.1583C10.2229 16.5686 10.4116 16.8869 10.6335 17.0126C10.9644 17.1969 11.2283 17.0628 11.2241 16.8953C10.9772 16.803 10.9184 16.6062 10.9518 16.4011C10.9853 16.221 11.1235 16.0828 11.3454 16.0493C11.6721 15.9992 11.9695 16.2043 12.0489 16.6271C12.1283 17.0374 11.9737 17.3895 11.7055 17.5863C11.157 17.9882 10.4406 17.7789 9.94639 17.4898C9.494 17.2259 2.81828 13.3436 1.12218 12.3552C1.05111 12.3134 0.99228 12.2546 0.996461 12.1543C1.00064 12.0536 1.04663 12.0035 1.11799 11.9617L5.04232 9.67909C6.61689 10.5964 8.18758 11.5093 9.0628 12.0244C9.25541 12.1375 9.66182 12.372 9.87114 12.4684C10.2647 12.6526 10.7673 12.8118 11.1862 12.7742C11.7936 12.724 12.2206 12.435 12.7862 12.1041C13.9964 11.4006 17.1291 9.57458 16.9533 9.67909L18.9175 10.8183C18.9175 10.8099 13.3138 14.0725 11.245 15.2703V15.2706Z" fill="currentColor"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Rollkit
      </span>
    </>
  ),
  logoLink: '/',
  project: {
    link: 'https://github.com/jcstein/rollkit-nextra',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/jcstein/rollkit-nextra',
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
        return {
            titleTemplate: '%s – Rollkit'
        }
    }
  },
  banner: {
    key: '2.0-release',
    text: <a href="https://blog.celestia.org" target="_blank">
      🎉 Introducing Rollkit! 
    </a>,
  },
  sidebar: {
    titleComponent({ title, type }) {
        if (type === 'separator') {
            return <span className="cursor-default">{title}</span>
        }
        return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
        <div>
            <p>
                © {new Date().getFullYear()} Rollkit
            </p>
        </div>
    )
},
  gitTimestamp: false,
}

export default config
