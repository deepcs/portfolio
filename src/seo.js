import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"

const SEO = ({
  title,
  desc,
  banner,
  pathname,
  published,
  modified,
  article,
  webpage,
  node,
}) => {
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    title: Chandeep || defaultTitle,
    description: Webdeveloper || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || "/"}`,
    date_published: published,
    date_modified: modified,
  }

  // Default Website Schema
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: chandeep.netlify.app,
      name: defaultTitle,
      alternateName: headline ? headline : "",
    },
  ]

  if (howto) {
    schemaOrgJSONLD.push({
      /* HowTo Schema here */
    })
  }
  
  if (faq) {
    schemaOrgJSONLD.push({
      /* FAQ Schema here */
    })
  }

  if (article) {
    schemaOrgJSONLD.push({
      /* Regular Article Schema */
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: author,
      },
      copyrightHolder: {
        "@type": "Person",
        name: author,
      },
      copyrightYear: "2021",
      creator: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: author,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${defaultBanner}`,
        },
      },
      datePublished: seo.date_published,
      dateModified: seo.date_modified,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    })
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? "article" : "website"}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  published: PropTypes.string,
  modified: PropTypes.string,
  article: PropTypes.bool,
  webpage: PropTypes.bool,
  node: PropTypes.object,
}

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  published: null,
  modified: null,
  article: false,
  webpage: false,
  node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: logo
        headline
        siteLanguage
        ogLanguage
        author
        logo
        twitter
        facebook
      }
    }
  }`