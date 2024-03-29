﻿Sys.loader.defineScripts({
    releaseUrl: "%/../MyClientControls/" + "{0}.js",
    debugUrl: "%/../MyClientControls/" + "{0}.debug.js"
},
    [
		{ name: "BootstrapPanelBase",
		    behaviors: [{name: "BootstrapPanelBase", typeName: "Sys.Extended.UI.BootstrapPanelBase"}],
		    executionDependencies: ["ExtendedBase", "ExtendedCommon", "Bootstrap3"] ,
		    isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.BootstrapPanelBase)
		},
        { name: "AdPanel",
	        behaviors: [{name: "AdPanel", typeName: "Sys.Extended.UI.AdPanel"}],
	        executionDependencies: ["BootstrapPanelBase"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.AdPanel)
	    }
    ]
);

Sys.loader.defineScripts({
	
}, 
	[
	   { name: "jQuery-1.10",
	     releaseUrl: "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min.js",
	     debugUrl: "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.js",
	     isLoaded: !!window.jQuery
	   },
	   { name: "jQueryUI-1.10",
	     releaseUrl: "http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.min.js",
	     debugUrl: "http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.js",
	     dependencies: ["jQuery-1.10"],
	     isLoaded: !!(window.jQuery && jQuery.ui)
	   },
	   { name: "Bootstrap3",
	     releaseUrl: "http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js",
	     debugUrl: "http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js",
	     dependencies: ["jQuery-1.10", "jQueryUI-1.10"],
	     isLoaded: !!(window.jQuery && jQuery.ui && jQuery.fn.carousel)
	   }
    ]
);

