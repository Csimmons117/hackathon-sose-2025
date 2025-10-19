class SiteInclude extends HTMLElement{
    /**
    @param {string} path
    */
    async loadFragment(path)
    {
        try{
            const response = await fetch(path, {cache: "no-cache"});
            if(!response.ok) throw new Error('HTTP ${response.status} while loading ${path}');
            const html = await response.text();

            this.innerHTML = html;
        }
        catch(err){
            console.error("Error loading component:", err);
            this.innerHTML = '<div style = "color: red; font-size: 14px;"> ⚠️ Failed to load component from <strong>${path}</strong>. Check your console or file paths. </div>';

        }
    }
}

class SiteHeader extends SiteInclude {
    connectedCallback() {
        const src = this.getAttribute("src") || "/components/header.html";
        this.loadFragment(src);
    }
}

class SiteFooter extends SiteInclude {
    connectedCallback() {
        const src = this.getAttribute("src") || "/components/footer.html";
        this.loadFragment(src);
    }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);