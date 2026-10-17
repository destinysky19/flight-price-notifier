<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Protected pages live under src/routes/_authenticated/ (client-only gate redirecting to /signin); why: the session lives in browser storage, which the server can't read.
- Component files use PascalCase names (e.g. AuthForm.tsx); why: course convention from the user's uploaded rules.
