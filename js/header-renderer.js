document.getElementsByTagName("header")[0].innerHTML = `
<span class="header__inner">
<a href="/" style="text-decoration: none;">
    <div class="logo">
            <span class="logo__mark">></span>
<span class="logo__text">t4ccer/algoviz</span>
<span class="logo__cursor" style="background-color: #00ff00;"></span>
</div>
</a>


<span class="header__right">

<nav class="menu">
<ul class="menu__inner"><li><a href="https://www.t4ccer.com/">Home page</a></li>
</ul>
</nav>

<span class="menu-trigger">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
</span>
<span class="theme-toggle unselectable"><svg class="theme-toggler" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
    3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
    13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"></path>
  </svg>
  </span>


</span>
</span>
`;