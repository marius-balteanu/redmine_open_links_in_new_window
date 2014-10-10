(function()
{	
	/**
	 * Need to be binded to anchor on call
	 */
	var handleAnchor = function()
	{
		var pass = true;

		// Requirements
		if (-1 != this.className.indexOf('wiki-anchor')) pass = false;

		if (pass)
		{
			this.target = '_blank';
		}
	};
	var selectors = "div.wiki a, div.attachments a, div.journal ul.details a, a.external, td.cf_6 a";

	if (document.observe)
	{

		// redmine uses prototype so use it.

		document.observe('dom:loaded', function()
		{
			var links = $$(selectors);
			for (var i = 0; i < links.length; i++)
			{
				handleAnchor.call(links[i]);
			}
		});
	}
	else if (window.jQuery)
	{

		// redmine uses jQuery so use it.

		jQuery(document).ready(function()
		{
			jQuery(selectors).each(handleAnchor);
		});
	}
	else
	{
		console.error('(redmine_open_links_in_new_window) JS-framework is unknown!');
	}
})();