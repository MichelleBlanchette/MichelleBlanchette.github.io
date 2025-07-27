import { get } from 'https';
import { writeFile } from 'fs/promises';

interface Post {
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

get('https://purpleturtlecreative.com/wp-json/wp/v2/ptc-portfolio?_fields=content,date,slug,title&per_page=100', (res) => {

  if ( 200 !== res.statusCode ) {
    console.error(`Request failed with status code ${res.statusCode}`);
    return;
  }

  // Process the response data.
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {

    const posts = JSON.parse(body) as Post[];
    if ( ! Array.isArray(posts) || 0 === posts.length ) {
      console.error('No posts found or response is not an array');
      return;
    }

    console.log(`Downloading ${posts.length} posts...`);
    posts.forEach((post, index) => {
      if (
        post?.title?.rendered &&
        post?.content?.rendered &&
        post?.date &&
        post?.slug
      ) {
        const fileName = `../_posts/${post.date.split('T')[0]}-${post.slug}.md`;
        const postContent = post.content.rendered
          .replaceAll("\n\n\n\n", "\n\n")
          .replaceAll("<p>", "")
          .replaceAll("</p>", "")
          .replaceAll("<code>", "`")
          .replaceAll("</code>", "`")
        writeFile(
          fileName,
          `---\ntitle: "${post.title.rendered}"\nslug: "${post.slug}"\n---\n${postContent}`
        )
          .then(() => console.log(`Wrote file [${index}]: ${fileName}`))
          .catch((err) => console.error('Error writing file:', err));
      } else {
        console.error(`Post at index ${index} is missing required fields:`, post);
      }
    });
  });
}).on('error', (e) => {
  console.error(e);
});
