<script lang="ts">
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
	import type { StatsForNerdsPageData } from "$lib/types";

	const joinGameUrl = "https://www.roblox.com/games/start?placeId=123076957357158";
	let { data }: { data: StatsForNerdsPageData } = $props();
</script>

<svelte:head>
	<title>stats for nerds | tycoon simulator wiki</title>
	<meta
		name="description"
		content="stats for nerds and items that lie references for tycoon simulator."
	/>
</svelte:head>

<main class="stats-shell">
	<header class="topbar">
		<a class="brand" href="/">Tycoon Sim Wiki</a>
		<div class="topbar-actions">
			<a class="primary top-button" href={joinGameUrl} target="_blank" rel="noreferrer"
				>Join the Game</a
			>
			<a class="secondary top-button" href="/catalog">Index</a>
			<a class="secondary top-button" href="/extra-info">Extra Info</a>
			<a class="secondary top-button" href="/crates">Crates</a>
			<a class="secondary top-button" href="/builder">Builder</a>
			<ThemeToggle />
		</div>
	</header>

	<section class="hero-panel">
		<div>
			<p class="eyebrow">Reference</p>
			<h1>Stats for Nerds</h1>
		</div>
	</section>

	<section class="sheet-card" aria-label="stats for nerds">
		<div class="sheet-scroll">
			<table>
				<tbody>
					{#each data.statsRows as row}
						<tr>
							{#each row as cell}
								<td class:empty-cell={cell === ""}>{cell}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<section class="section-header">
		<div>
			<p class="eyebrow">Reference</p>
			<h2>Items That Lie</h2>
		</div>
	</section>

	<section class="lie-grid" aria-label="items that lie">
		{#each data.itemsThatLieSections as section}
			<article class="lie-card">
				<h3>{section.title}</h3>
				<dl>
					{#each section.rows as row}
						<div>
							<dt>{row.label}</dt>
							<dd>{row.value}</dd>
						</div>
					{/each}
				</dl>
			</article>
		{/each}
	</section>
</main>

<style>
	.stats-shell {
		width: min(1200px, calc(100% - 2rem));
		margin: 0 auto;
		padding: 2rem 0 3rem;
		display: grid;
		gap: 1rem;
		text-transform: var(--site-text-transform);
	}

	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.brand,
	.top-button,
	.hero-panel,
	.sheet-card,
	.section-header,
	.lie-card {
		border: 1px solid var(--border);
		background: var(--panel);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		padding: 0.95rem 1.2rem;
		color: var(--text);
		font-size: 0.95rem;
	}

	.topbar-actions {
		display: flex;
		gap: 0.6rem;
	}

	.top-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.9rem 1.2rem;
		color: #f2f2f2;
		background: var(--surface-raised);
	}

	.primary {
		background: linear-gradient(135deg, #5c87ff, #3d6cff);
		border-color: rgba(79, 126, 255, 0.55);
	}

	.top-button.secondary {
		color: var(--text);
	}

	.hero-panel,
	.section-header {
		padding: 1.5rem;
	}

	.eyebrow,
	dt {
		margin: 0;
		font-size: 0.78rem;
		letter-spacing: 0.14em;
		color: #8fb0ff;
	}

	h1,
	h2,
	h3 {
		margin: 0;
		line-height: 1;
		letter-spacing: -0.04em;
	}

	h1 {
		margin-top: 0.7rem;
		font-size: clamp(2.8rem, 6vw, 4.6rem);
	}

	h2 {
		margin-top: 0.6rem;
		font-size: clamp(1.8rem, 4vw, 2.6rem);
	}

	h3 {
		font-size: 1.4rem;
	}

	.sheet-card {
		padding: 1rem;
	}

	.sheet-scroll {
		overflow-x: auto;
	}

	table {
		width: 100%;
		min-width: 760px;
		border-collapse: collapse;
	}

	td {
		min-width: 7rem;
		padding: 0.75rem 0.8rem;
		border: 1px solid var(--line);
		color: var(--text);
		line-height: 1.45;
		vertical-align: top;
	}

	tr:first-child td,
	td:first-child:not(.empty-cell) {
		color: #8fb0ff;
	}

	.empty-cell {
		color: transparent;
	}

	.lie-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
	}

	.lie-card {
		display: grid;
		align-content: start;
		gap: 1rem;
		padding: 1.35rem;
	}

	dl {
		display: grid;
		gap: 0.9rem;
		margin: 0;
	}

	dl div {
		display: grid;
		gap: 0.25rem;
		padding-top: 0.8rem;
		border-top: 1px solid var(--line);
	}

	dd {
		margin: 0;
		line-height: 1.6;
	}

	@media (max-width: 780px) {
		.stats-shell {
			width: min(100% - 1rem, 1200px);
			padding-top: 1rem;
		}

		.topbar {
			flex-direction: column;
			align-items: stretch;
		}

		.topbar-actions {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr auto;
		}
	}
</style>
