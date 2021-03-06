



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>angular-ui-tree/uiTreeNodes.js at master · JimLiu/angular-ui-tree</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="JimLiu/angular-ui-tree" name="twitter:title" /><meta content="angular-ui-tree - An Angularjs ui component that can sort nested lists and bind data, and it dosen&amp;#39;t need to depend on jQuery." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/648674?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/648674?v=2&amp;s=400" property="og:image" /><meta content="JimLiu/angular-ui-tree" property="og:title" /><meta content="https://github.com/JimLiu/angular-ui-tree" property="og:url" /><meta content="angular-ui-tree - An Angularjs ui component that can sort nested lists and bind data, and it dosen&#39;t need to depend on jQuery." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="D408D9FE:0873:269B3C5A:54043867" name="octolytics-dimension-request_id" /><meta content="6123291" name="octolytics-actor-id" /><meta content="Schleusenfrosch" name="octolytics-actor-login" /><meta content="428b214b7598ecd4c2647e3e5b2bdb5befcc988799b0ee0889f55db4cafbc062" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="HJ0QPeTDbGZWn4gnSjALnqe6GU0A8bY+zsX0VyBKYuTXFT3Qky0V76h6thLnb9X1CIIkt49adUqnVwQyz2L93A==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-2cf6fb933f5fa8bc1973edfd9391cdab5ef18561.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-77a12dbff370498e7105b03f9140296f10c4cc26.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="f84a96af2daa4708799396be997573ec">

      
  <meta name="description" content="angular-ui-tree - An Angularjs ui component that can sort nested lists and bind data, and it dosen&#39;t need to depend on jQuery.">
  <meta name="go-import" content="github.com/JimLiu/angular-ui-tree git https://github.com/JimLiu/angular-ui-tree.git">

  <meta content="648674" name="octolytics-dimension-user_id" /><meta content="JimLiu" name="octolytics-dimension-user_login" /><meta content="14037931" name="octolytics-dimension-repository_id" /><meta content="JimLiu/angular-ui-tree" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14037931" name="octolytics-dimension-repository_network_root_id" /><meta content="JimLiu/angular-ui-tree" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/JimLiu/angular-ui-tree/commits/master.atom" rel="alternate" title="Recent Commits to angular-ui-tree:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search">
          <form accept-charset="UTF-8" action="/JimLiu/angular-ui-tree/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/JimLiu/angular-ui-tree/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left">
        <li class="header-nav-item explore" data-ga-click="Header, go to explore, text:explore">
          <a class="header-nav-link" href="/explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/Schleusenfrosch" data-ga-click="Header, go to profile, text:username">
      <img alt="Schleusenfrosch" class="avatar" data-user="6123291" height="20" src="https://avatars1.githubusercontent.com/u/6123291?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">Schleusenfrosch</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="JimLiu/angular-ui-tree">This repository</span>
    </li>
      <li>
        <a href="/JimLiu/angular-ui-tree/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0uWg0q9/K+RijB716unNXmiwYTAJPAPw3EjpiAVSItJ0G3EgP2Rgjt6bx7+9pJrurSet8iilSqLvQO292BEnfA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qN74HWlmH2gMvtErkrcq80OGp3wSW7tkCvgm0ZiOcMooTWLhwNRHLR9HK/uhLbiaIJyY3gSuiC1Vb7bGUayugQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="14037931" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/JimLiu/angular-ui-tree/watchers">
        46
      </a>
      <a href="/JimLiu/angular-ui-tree/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/JimLiu/angular-ui-tree/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="XZ6i7pAY85B0WnfuLN1i9CoAnMZrHcwEctTzWmF17F9Hej5i4JzeP9cAtO1eDPCPRtkUKj6yxEkB2AkUV1QAtQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar JimLiu/angular-ui-tree">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/JimLiu/angular-ui-tree/stargazers">
          510
        </a>
</form>
    <form accept-charset="UTF-8" action="/JimLiu/angular-ui-tree/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rmOogIVcPnCchyFOO5RRDoQtJxJa6Dz2Fb6DyeGHuLli9SGYR/yFJiUn3Ypg+2mZ/J3MWkvpCBMYsa/ldhGdqQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star JimLiu/angular-ui-tree">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/JimLiu/angular-ui-tree/stargazers">
          510
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/JimLiu/angular-ui-tree/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of JimLiu/angular-ui-tree to your account" aria-label="Fork your own copy of JimLiu/angular-ui-tree to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/JimLiu/angular-ui-tree/network" class="social-count">116</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/JimLiu" class="url fn" itemprop="url" rel="author"><span itemprop="title">JimLiu</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/JimLiu/angular-ui-tree" class="js-current-repository js-repo-home-link">angular-ui-tree</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/JimLiu/angular-ui-tree/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/JimLiu/angular-ui-tree" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /JimLiu/angular-ui-tree">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/JimLiu/angular-ui-tree/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /JimLiu/angular-ui-tree/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/JimLiu/angular-ui-tree/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /JimLiu/angular-ui-tree/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/JimLiu/angular-ui-tree/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /JimLiu/angular-ui-tree/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/JimLiu/angular-ui-tree/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /JimLiu/angular-ui-tree/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/JimLiu/angular-ui-tree/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /JimLiu/angular-ui-tree/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/JimLiu/angular-ui-tree.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/JimLiu/angular-ui-tree.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:JimLiu/angular-ui-tree.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:JimLiu/angular-ui-tree.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/JimLiu/angular-ui-tree" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/JimLiu/angular-ui-tree" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/JimLiu/angular-ui-tree" class="minibutton sidebar-button" title="Save JimLiu/angular-ui-tree to your computer and use it in GitHub Desktop." aria-label="Save JimLiu/angular-ui-tree to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/JimLiu/angular-ui-tree/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download JimLiu/angular-ui-tree as a zip file"
                   title="Download JimLiu/angular-ui-tree as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/JimLiu/angular-ui-tree/blob/c51b9d03a4126842e744de296c24331de6439431/source/directives/uiTreeNodes.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:99f32c2e3b4c59e6cf45422638dfd9be -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/blob/angular-nestedSortable/source/directives/uiTreeNodes.js"
                 data-name="angular-nestedSortable"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="angular-nestedSortable">angular-nestedSortable</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/blob/draft/source/directives/uiTreeNodes.js"
                 data-name="draft"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="draft">draft</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/blob/gh-pages/source/directives/uiTreeNodes.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/blob/issue/216/source/directives/uiTreeNodes.js"
                 data-name="issue/216"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="issue/216">issue/216</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/blob/master/source/directives/uiTreeNodes.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/blob/revert-214-master/source/directives/uiTreeNodes.js"
                 data-name="revert-214-master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="revert-214-master">revert-214-master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v2.0.6/source/directives/uiTreeNodes.js"
                 data-name="v2.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.6">v2.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v2.0.0/source/directives/uiTreeNodes.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.3.8/source/directives/uiTreeNodes.js"
                 data-name="v1.3.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.8">v1.3.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.3.5/source/directives/uiTreeNodes.js"
                 data-name="v1.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.5">v1.3.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.3.4/source/directives/uiTreeNodes.js"
                 data-name="v1.3.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.4">v1.3.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.3.3/source/directives/uiTreeNodes.js"
                 data-name="v1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.3">v1.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.2.8/source/directives/uiTreeNodes.js"
                 data-name="v1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8">v1.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.2.7/source/directives/uiTreeNodes.js"
                 data-name="v1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7">v1.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.2.6/source/directives/uiTreeNodes.js"
                 data-name="v1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6">v1.2.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.2.5/source/directives/uiTreeNodes.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/v1.2.4/source/directives/uiTreeNodes.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.1.5/source/directives/uiTreeNodes.js"
                 data-name="2.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.5">2.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.1.4/source/directives/uiTreeNodes.js"
                 data-name="2.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.4">2.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.1.2/source/directives/uiTreeNodes.js"
                 data-name="2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.2">2.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.1.1/source/directives/uiTreeNodes.js"
                 data-name="2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.1">2.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.1.0/source/directives/uiTreeNodes.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.0.11/source/directives/uiTreeNodes.js"
                 data-name="2.0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.11">2.0.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.0.10/source/directives/uiTreeNodes.js"
                 data-name="2.0.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.10">2.0.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.0.9/source/directives/uiTreeNodes.js"
                 data-name="2.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.9">2.0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.0.7/source/directives/uiTreeNodes.js"
                 data-name="2.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.7">2.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/2.0.3/source/directives/uiTreeNodes.js"
                 data-name="2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.3">2.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JimLiu/angular-ui-tree/tree/1.3.5/source/directives/uiTreeNodes.js"
                 data-name="1.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.5">1.3.5</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/JimLiu/angular-ui-tree/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="source/directives/uiTreeNodes.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/JimLiu/angular-ui-tree" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular-ui-tree</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/JimLiu/angular-ui-tree/tree/master/source" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">source</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/JimLiu/angular-ui-tree/tree/master/source/directives" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">directives</span></a></span><span class="separator"> / </span><strong class="final-path">uiTreeNodes.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Olivier Balais" class="avatar" data-user="807362" height="24" src="https://avatars2.githubusercontent.com/u/807362?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/bobey" rel="contributor">bobey</a></span>
        <time datetime="2014-08-28T09:36:23Z" is="relative-time">August 28, 2014</time>
        <div class="commit-title">
            <a href="/JimLiu/angular-ui-tree/commit/8b8c28f9fca217d5cf53d7b023f2461c749abd89" class="message" data-pjax="true" title="Remove coding style errors

Source code now respects coding style check with jscs AND jshint.">Remove coding style errors</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>5</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="JimLiu" href="/JimLiu/angular-ui-tree/commits/master/source/directives/uiTreeNodes.js?author=JimLiu"><img alt="Jim Liu" class="avatar" data-user="648674" height="20" src="https://avatars0.githubusercontent.com/u/648674?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zeird" href="/JimLiu/angular-ui-tree/commits/master/source/directives/uiTreeNodes.js?author=zeird"><img alt="zeird" class="avatar" data-user="5000549" height="20" src="https://avatars0.githubusercontent.com/u/5000549?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="bobey" href="/JimLiu/angular-ui-tree/commits/master/source/directives/uiTreeNodes.js?author=bobey"><img alt="Olivier Balais" class="avatar" data-user="807362" height="20" src="https://avatars0.githubusercontent.com/u/807362?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="yurks" href="/JimLiu/angular-ui-tree/commits/master/source/directives/uiTreeNodes.js?author=yurks"><img alt="yurks" class="avatar" data-user="4581398" height="20" src="https://avatars0.githubusercontent.com/u/4581398?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jrproctor" href="/JimLiu/angular-ui-tree/commits/master/source/directives/uiTreeNodes.js?author=jrproctor"><img alt="Jeff Proctor" class="avatar" data-user="1466552" height="20" src="https://avatars0.githubusercontent.com/u/1466552?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jim Liu" data-user="648674" height="24" src="https://avatars2.githubusercontent.com/u/648674?v=2&amp;s=48" width="24" />
            <a href="/JimLiu">JimLiu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="zeird" data-user="5000549" height="24" src="https://avatars2.githubusercontent.com/u/5000549?v=2&amp;s=48" width="24" />
            <a href="/zeird">zeird</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Olivier Balais" data-user="807362" height="24" src="https://avatars2.githubusercontent.com/u/807362?v=2&amp;s=48" width="24" />
            <a href="/bobey">bobey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="yurks" data-user="4581398" height="24" src="https://avatars2.githubusercontent.com/u/4581398?v=2&amp;s=48" width="24" />
            <a href="/yurks">yurks</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Proctor" data-user="1466552" height="24" src="https://avatars2.githubusercontent.com/u/1466552?v=2&amp;s=48" width="24" />
            <a href="/jrproctor">jrproctor</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>59 lines (50 sloc)</span>
          <span class="meta-divider"></span>
        <span>1.757 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/JimLiu/angular-ui-tree/raw/master/source/directives/uiTreeNodes.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/JimLiu/angular-ui-tree/blame/master/source/directives/uiTreeNodes.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/JimLiu/angular-ui-tree/commits/master/source/directives/uiTreeNodes.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/JimLiu/angular-ui-tree?branch=master&amp;filepath=source%2Fdirectives%2FuiTreeNodes.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/JimLiu/angular-ui-tree/edit/master/source/directives/uiTreeNodes.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/JimLiu/angular-ui-tree/delete/master/source/directives/uiTreeNodes.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">  <span class="s1">&#39;use strict&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">  <span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ui.tree&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">  <span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;uiTreeNodes&#39;</span><span class="p">,</span> <span class="p">[</span> <span class="s1">&#39;treeConfig&#39;</span><span class="p">,</span> <span class="s1">&#39;$window&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">    <span class="kd">function</span><span class="p">(</span><span class="nx">treeConfig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">      <span class="k">return</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">        <span class="nx">require</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;ngModel&#39;</span><span class="p">,</span> <span class="s1">&#39;?^uiTreeNode&#39;</span><span class="p">,</span> <span class="s1">&#39;^uiTree&#39;</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">        <span class="nx">restrict</span><span class="o">:</span> <span class="s1">&#39;A&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">        <span class="nx">scope</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">        <span class="nx">controller</span><span class="o">:</span> <span class="s1">&#39;TreeNodesController&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">        <span class="nx">link</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">controllersArr</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">          <span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">          <span class="nx">angular</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">config</span><span class="p">,</span> <span class="nx">treeConfig</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">nodesClass</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">            <span class="nx">element</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">nodesClass</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">          <span class="kd">var</span> <span class="nx">ngModel</span> <span class="o">=</span> <span class="nx">controllersArr</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">          <span class="kd">var</span> <span class="nx">treeNodeCtrl</span> <span class="o">=</span> <span class="nx">controllersArr</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">          <span class="kd">var</span> <span class="nx">treeCtrl</span> <span class="o">=</span> <span class="nx">controllersArr</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">treeNodeCtrl</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">            <span class="nx">treeNodeCtrl</span><span class="p">.</span><span class="nx">scope</span><span class="p">.</span><span class="nx">$childNodesScope</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">            <span class="nx">scope</span><span class="p">.</span><span class="nx">$nodeScope</span> <span class="o">=</span> <span class="nx">treeNodeCtrl</span><span class="p">.</span><span class="nx">scope</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// find the root nodes if there is no parent node and have a parent ui-tree</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">            <span class="nx">treeCtrl</span><span class="p">.</span><span class="nx">scope</span><span class="p">.</span><span class="nx">$nodesScope</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">          <span class="nx">scope</span><span class="p">.</span><span class="nx">$treeScope</span> <span class="o">=</span> <span class="nx">treeCtrl</span><span class="p">.</span><span class="nx">scope</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">ngModel</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">            <span class="nx">ngModel</span><span class="p">.</span><span class="nx">$render</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ngModel</span><span class="p">.</span><span class="nx">$modelValue</span> <span class="o">||</span> <span class="o">!</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">ngModel</span><span class="p">.</span><span class="nx">$modelValue</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">                <span class="nx">scope</span><span class="p">.</span><span class="nx">$modelValue</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">              <span class="nx">scope</span><span class="p">.</span><span class="nx">$modelValue</span> <span class="o">=</span> <span class="nx">ngModel</span><span class="p">.</span><span class="nx">$modelValue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">            <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">          <span class="nx">scope</span><span class="p">.</span><span class="nx">$watch</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">maxDepth</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">((</span><span class="k">typeof</span> <span class="nx">val</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;number&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">              <span class="nx">scope</span><span class="p">.</span><span class="nx">maxDepth</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">          <span class="nx">attrs</span><span class="p">.</span><span class="nx">$observe</span><span class="p">(</span><span class="s1">&#39;nodrop&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">            <span class="nx">scope</span><span class="p">.</span><span class="nx">nodrop</span> <span class="o">=</span> <span class="p">((</span><span class="k">typeof</span> <span class="nx">val</span><span class="p">)</span> <span class="o">!=</span> <span class="s2">&quot;undefined&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">          <span class="nx">attrs</span><span class="p">.</span><span class="nx">$observe</span><span class="p">(</span><span class="s1">&#39;horizontal&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">            <span class="nx">scope</span><span class="p">.</span><span class="nx">horizontal</span> <span class="o">=</span> <span class="p">((</span><span class="k">typeof</span> <span class="nx">val</span><span class="p">)</span> <span class="o">!=</span> <span class="s2">&quot;undefined&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">  <span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line"><span class="p">})();</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03737s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-bc28a4f6b05fd6cd91bbc92310bbbc53e54c6ec2.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-46193212c1e9feb8753d1ecfdfcfad0a23a015d2.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

