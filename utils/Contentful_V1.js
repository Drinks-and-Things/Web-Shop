export class ContentfulService {
	cdaClient = createClient({
		space: CONFIG.space,
		accessToken: CONFIG.accessToken,
	});

	titleHandlers = [];

	constructor() {
		this.titleHandlers = [];
		this.getSpace();
	}

	onTitleChange(fn) {
		this.titleHandlers.push(fn);
	}

	async getPackages() {
		const packages = await this.cdaClient.getEntries({
			content_type: contentTypeIds.category,
			'fields.title': 'packages',
		});

		return packages;
	}

	async Shisha() {
		const agb = await this.cdaClient.getEntries({
			content_type: contentTypeIds.agb,
		});

		return agb;
	}

	async getEntertainment() {
		const entertainment = await this.cdaClient.getEntries({
			content_type: contentTypeIds.entertainment,
		});

		return entertainment;
	}

	async getAGB() {
		const agb = await this.cdaClient.getEntries({
			content_type: contentTypeIds.agb,
		});

		return agb;
	}

	async getSpace() {
		const space = await this.cdaClient.getSpace();
		this.titleHandlers.forEach((handler) => handler(space.name));
		return space;
	}

	async getProduct(slug) {
		const product = await this.getProducts({ 'fields.slug': slug });
		return product[0];
	}

	async getProducts(query) {
		const res = await this.cdaClient.getEntries({
			content_type: CONFIG.contentTypeIds.product,
			...query,
		});
		return res.items;
	}

	async getProductsByTag(slug) {
		const items = await this.getProducts({ 'fields.tags': slug });
		return items;
	}

	async getProductsByCategory(category) {
		const items = await this.getProducts({ content_type: category });
		return items;
	}

	async getCategories() {
		const res = await this.cdaClient.getEntries({
			content_type: CONFIG.contentTypeIds.category,
		});
		return res.items;
	}
}
