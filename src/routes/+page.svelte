<script lang="ts">
	import { 
		Button, 
		Accordion, 
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
		Avatar, 
		AvatarImage,
		AvatarFallback,
		Badge, 
		Breadcrumb,
		BreadcrumbEllipsis,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator,
		Calendar,
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious,
		Checkbox,
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger,
		Command,
		ContextMenu,
		HoverCard,
		HoverCardContent,
		HoverCardTrigger,
		Input,
		InputOTP,
		InputOTPGroup,
		InputOTPSlot,
		InputOTPSeparator,
		Label,
		Menubar,
		NavigationMenu,
		Pagination,
		Popover,
		PopoverContent,
		PopoverTrigger,
		RadioGroup,
		RadioGroupItem,
		RangeCalendar
	} from '@/components';
	import { Calendar as CalendarIcon, ChevronDown, Home, User } from '@lucide/svelte';
	
	let accordionValue = $state(['item-1']);
	let checkboxChecked = $state(false);
	let radioValue = $state('option1');
	let inputValue = $state('');
	let otpValue = $state('');
	let calendarValue = $state(undefined);
	let rangeValue = $state({ start: undefined, end: undefined });
</script>

<main class="min-h-screen bg-background">
	<div class="container mx-auto py-8 px-4">
		<header class="mb-12 text-center">
			<h1 class="text-4xl font-bold mb-4">Svelte UI Component Library</h1>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Kapsamlı bir Svelte bileşen kütüphanesi. Tüm bileşenlerin varyantları ve kullanım örnekleri.
			</p>
		</header>

		<!-- Navigation -->
		<nav class="mb-8 sticky top-4 z-10 bg-background/80 backdrop-blur-sm border rounded-lg p-4">
			<div class="flex flex-wrap gap-2 justify-center">
				<a href="#button" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Button</a>
				<a href="#accordion" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Accordion</a>
				<a href="#avatar" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Avatar</a>
				<a href="#badge" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Badge</a>
				<a href="#breadcrumb" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Breadcrumb</a>
				<a href="#calendar" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Calendar</a>
				<a href="#card" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Card</a>
				<a href="#carousel" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Carousel</a>
				<a href="#checkbox" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Checkbox</a>
				<a href="#collapsible" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Collapsible</a>
				<a href="#command" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Command</a>
				<a href="#context-menu" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Context Menu</a>
				<a href="#form" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Form</a>
				<a href="#hover-card" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Hover Card</a>
				<a href="#input" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Input</a>
				<a href="#input-otp" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Input OTP</a>
				<a href="#label" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Label</a>
				<a href="#menubar" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Menubar</a>
				<a href="#navigation-menu" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Navigation Menu</a>
				<a href="#pagination" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Pagination</a>
				<a href="#popover" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Popover</a>
				<a href="#radio-group" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Radio Group</a>
				<a href="#range-calendar" class="text-sm px-3 py-1 rounded-md hover:bg-accent">Range Calendar</a>
			</div>
		</nav>

		<!-- Button Section -->
		<section id="button" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Button</h2>
			<p class="text-muted-foreground mb-6">
				Kullanıcı etkileşimleri için temel buton bileşeni. Farklı varyantlar ve boyutlar destekler.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Varyantlar</h3>
					<div class="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
						<Button>Default</Button>
						<Button variant="destructive">Destructive</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="link">Link</Button>
					</div>
				</div>

				<div>
					<h3 class="text-xl font-semibold mb-4">Boyutlar</h3>
					<div class="flex flex-wrap items-center gap-4 p-6 border rounded-lg bg-card">
						<Button size="sm">Small</Button>
						<Button size="default">Default</Button>
						<Button size="lg">Large</Button>
						<Button size="icon">
							<User class="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div>
					<h3 class="text-xl font-semibold mb-4">Durumlar</h3>
					<div class="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
						<Button>Normal</Button>
						<Button disabled>Disabled</Button>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Button variant="default" size="default">Click me</Button>
<Button variant="outline" disabled>Disabled</Button>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Accordion Section -->
		<section id="accordion" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Accordion</h2>
			<p class="text-muted-foreground mb-6">
				Katlanabilir içerik bölümleri. Kullanıcıların içeriği gösterip gizlemesine olanak tanır.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card">
						<Accordion bind:value={accordionValue} type="multiple" class="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>Accordion Item 1</AccordionTrigger>
								<AccordionContent>
									Bu ilk accordion öğesinin içeriğidir. Burada detaylı bilgiler yer alabilir.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>Accordion Item 2</AccordionTrigger>
								<AccordionContent>
									İkinci accordion öğesinin içeriği. Farklı türde bilgiler içerebilir.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>Accordion Item 3</AccordionTrigger>
								<AccordionContent>
									Üçüncü ve son accordion öğesi. Daha fazla bilgi için kullanılabilir.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Accordion bind:value={accordionValue} type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Başlık</AccordionTrigger>
    <AccordionContent>İçerik</AccordionContent>
  </AccordionItem>
</Accordion>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Avatar Section -->
		<section id="avatar" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Avatar</h2>
			<p class="text-muted-foreground mb-6">
				Kullanıcı profil resimlerini göstermek için kullanılan bileşen. Fallback desteği ile.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="flex flex-wrap items-center gap-4 p-6 border rounded-lg bg-card">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
							<AvatarFallback>VC</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Badge Section -->
		<section id="badge" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Badge</h2>
			<p class="text-muted-foreground mb-6">
				Durum göstergeleri ve etiketler için kullanılan küçük bileşen.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Varyantlar</h3>
					<div class="flex flex-wrap items-center gap-4 p-6 border rounded-lg bg-card">
						<Badge>Default</Badge>
						<Badge variant="secondary">Secondary</Badge>
						<Badge variant="destructive">Destructive</Badge>
						<Badge variant="outline">Outline</Badge>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Badge variant="default">Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Breadcrumb Section -->
		<section id="breadcrumb" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Breadcrumb</h2>
			<p class="text-muted-foreground mb-6">
				Navigasyon hiyerarşisini gösteren bileşen.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card">
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href="/">
										<Home class="h-4 w-4" />
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbLink href="/components">Components</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Checkbox Section -->
		<section id="checkbox" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Checkbox</h2>
			<p class="text-muted-foreground mb-6">
				Çoklu seçim için kullanılan form kontrolü.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="space-y-4 p-6 border rounded-lg bg-card">
						<div class="flex items-center space-x-2">
							<Checkbox bind:checked={checkboxChecked} id="terms" />
							<Label for="terms">Şartları ve koşulları kabul ediyorum</Label>
						</div>
						<div class="flex items-center space-x-2">
							<Checkbox checked={true} id="checked" />
							<Label for="checked">Seçili checkbox</Label>
						</div>
						<div class="flex items-center space-x-2">
							<Checkbox disabled id="disabled" />
							<Label for="disabled">Devre dışı checkbox</Label>
						</div>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<div class="flex items-center space-x-2">
  <Checkbox bind:checked={checkboxChecked} id="terms" />
  <Label for="terms">Şartları kabul ediyorum</Label>
</div>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Input Section -->
		<section id="input" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Input</h2>
			<p class="text-muted-foreground mb-6">
				Metin girişi için kullanılan temel form kontrolü.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="space-y-4 p-6 border rounded-lg bg-card max-w-sm">
						<div>
							<Label for="email">Email</Label>
							<Input bind:value={inputValue} type="email" id="email" placeholder="Email adresinizi girin" />
						</div>
						<div>
							<Label for="password">Şifre</Label>
							<Input type="password" id="password" placeholder="Şifrenizi girin" />
						</div>
						<div>
							<Label for="disabled">Devre Dışı</Label>
							<Input disabled id="disabled" placeholder="Devre dışı input" />
						</div>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<div>
  <Label for="email">Email</Label>
  <Input bind:value={inputValue} type="email" id="email" placeholder="Email" />
</div>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Input OTP Section -->
		<section id="input-otp" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Input OTP</h2>
			<p class="text-muted-foreground mb-6">
				Tek kullanımlık şifre (OTP) girişi için özelleştirilmiş input bileşeni.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="space-y-4 p-6 border rounded-lg bg-card">
						<div>
							<Label for="otp">OTP Kodu</Label>
							<InputOTP bind:value={otpValue} maxlength={6}>
								{#snippet children({ cells })}
									<InputOTPGroup>
										<InputOTPSlot cell={cells[0]} />
										<InputOTPSlot cell={cells[1]} />
										<InputOTPSlot cell={cells[2]} />
									</InputOTPGroup>
									<InputOTPSeparator />
									<InputOTPGroup>
										<InputOTPSlot cell={cells[3]} />
										<InputOTPSlot cell={cells[4]} />
										<InputOTPSlot cell={cells[5]} />
									</InputOTPGroup>
								{/snippet}
							</InputOTP>
						</div>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<InputOTP bind:value={otpValue} maxlength={6}>
  {#snippet children({ cells })}
    <InputOTPGroup>
      <InputOTPSlot cell={cells[0]} />
      <InputOTPSlot cell={cells[1]} />
      <InputOTPSlot cell={cells[2]} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot cell={cells[3]} />
      <InputOTPSlot cell={cells[4]} />
      <InputOTPSlot cell={cells[5]} />
    </InputOTPGroup>
  {/snippet}
</InputOTP>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Radio Group Section -->
		<section id="radio-group" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Radio Group</h2>
			<p class="text-muted-foreground mb-6">
				Tek seçim için kullanılan form kontrolü grubu.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card">
						<RadioGroup bind:value={radioValue}>
							<div class="flex items-center space-x-2">
								<RadioGroupItem value="option1" id="option1" />
								<Label for="option1">Seçenek 1</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroupItem value="option2" id="option2" />
								<Label for="option2">Seçenek 2</Label>
							</div>
							<div class="flex items-center space-x-2">
								<RadioGroupItem value="option3" id="option3" />
								<Label for="option3">Seçenek 3</Label>
							</div>
						</RadioGroup>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<RadioGroup bind:value={radioValue}>
  <div class="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label for="option1">Seçenek 1</Label>
  </div>
</RadioGroup>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Calendar Section -->
		<section id="calendar" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Calendar</h2>
			<p class="text-muted-foreground mb-6">
				Tarih seçimi için kullanılan takvim bileşeni.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card flex justify-center">
						<Calendar bind:value={calendarValue} type="single" />
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Calendar bind:value={calendarValue} />`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Card Section -->
		<section id="card" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Card</h2>
			<p class="text-muted-foreground mb-6">
				İçerik konteynerları için kullanılan esnek bileşen.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-lg bg-card">
						<Card class="w-full">
							<CardHeader>
								<CardTitle>Kart Başlığı</CardTitle>
								<CardDescription>Kart açıklaması burada yer alır.</CardDescription>
							</CardHeader>
							<CardContent>
								<p>Bu kartın ana içeriğidir. Burada detaylı bilgiler yer alabilir.</p>
							</CardContent>
							<CardFooter>
								<Button>Aksiyon</Button>
							</CardFooter>
						</Card>

						<Card class="w-full">
							<CardHeader>
								<CardTitle>İkinci Kart</CardTitle>
								<CardDescription>Farklı içerikli başka bir kart örneği.</CardDescription>
							</CardHeader>
							<CardContent>
								<div class="space-y-2">
									<div class="flex justify-between">
										<span>Özellik 1</span>
										<Badge>Aktif</Badge>
									</div>
									<div class="flex justify-between">
										<span>Özellik 2</span>
										<Badge variant="secondary">Beklemede</Badge>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Card>
  <CardHeader>
    <CardTitle>Başlık</CardTitle>
    <CardDescription>Açıklama</CardDescription>
  </CardHeader>
  <CardContent>
    İçerik
  </CardContent>
  <CardFooter>
    <Button>Aksiyon</Button>
  </CardFooter>
</Card>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Collapsible Section -->
		<section id="collapsible" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Collapsible</h2>
			<p class="text-muted-foreground mb-6">
				Katlanabilir içerik alanları için kullanılan bileşen.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card">
						<Collapsible class="w-full space-y-2">
							<div class="flex items-center justify-between space-x-4 px-4">
								<h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
								<CollapsibleTrigger>
									<Button variant="ghost" size="sm" class="w-9 p-0">
										<ChevronDown class="h-4 w-4" />
									</Button>
								</CollapsibleTrigger>
							</div>
							<div class="rounded-md border px-4 py-3 font-mono text-sm">
								@radix-ui/primitives
							</div>
							<CollapsibleContent class="space-y-2">
								<div class="rounded-md border px-4 py-3 font-mono text-sm">
									@radix-ui/colors
								</div>
								<div class="rounded-md border px-4 py-3 font-mono text-sm">
									@stitches/react
								</div>
							</CollapsibleContent>
						</Collapsible>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Collapsible>
  <CollapsibleTrigger>Aç/Kapat</CollapsibleTrigger>
  <CollapsibleContent>
    Gizli içerik
  </CollapsibleContent>
</Collapsible>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Hover Card Section -->
		<section id="hover-card" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Hover Card</h2>
			<p class="text-muted-foreground mb-6">
				Hover durumunda gösterilen kart bileşeni.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card flex justify-center">
						<HoverCard>
							<HoverCardTrigger>
								<Button variant="link">@nextjs</Button>
							</HoverCardTrigger>
							<HoverCardContent class="w-80">
								<div class="flex justify-between space-x-4">
									<Avatar>
										<AvatarImage src="https://github.com/vercel.png" />
										<AvatarFallback>VC</AvatarFallback>
									</Avatar>
									<div class="space-y-1">
										<h4 class="text-sm font-semibold">@nextjs</h4>
										<p class="text-sm">
											The React Framework – created and maintained by @vercel.
										</p>
										<div class="flex items-center pt-2">
											<CalendarIcon class="mr-2 h-4 w-4 opacity-70" />
											<span class="text-xs text-muted-foreground">
												Joined December 2021
											</span>
										</div>
									</div>
								</div>
							</HoverCardContent>
						</HoverCard>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>
    Hover içeriği
  </HoverCardContent>
</HoverCard>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Popover Section -->
		<section id="popover" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Popover</h2>
			<p class="text-muted-foreground mb-6">
				Tıklanabilir açılır panel bileşeni.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card flex justify-center">
						<Popover>
							<PopoverTrigger>
								<Button variant="outline">Popover Aç</Button>
							</PopoverTrigger>
							<PopoverContent class="w-80">
								<div class="grid gap-4">
									<div class="space-y-2">
										<h4 class="font-medium leading-none">Boyutlar</h4>
										<p class="text-sm text-muted-foreground">
											Genişlik ve yükseklik değerlerini ayarlayın.
										</p>
									</div>
									<div class="grid gap-2">
										<div class="grid grid-cols-3 items-center gap-4">
											<Label for="width">Genişlik</Label>
											<Input id="width" value="100%" class="col-span-2 h-8" />
										</div>
										<div class="grid grid-cols-3 items-center gap-4">
											<Label for="height">Yükseklik</Label>
											<Input id="height" value="25px" class="col-span-2 h-8" />
										</div>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<Popover>
  <PopoverTrigger>Aç</PopoverTrigger>
  <PopoverContent>
    Popover içeriği
  </PopoverContent>
</Popover>`}</code></pre>
				</div>
			</div>
		</section>

		<!-- Range Calendar Section -->
		<section id="range-calendar" class="mb-16">
			<h2 class="text-3xl font-bold mb-6">Range Calendar</h2>
			<p class="text-muted-foreground mb-6">
				Tarih aralığı seçimi için kullanılan takvim bileşeni.
			</p>
			
			<div class="space-y-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Temel Kullanım</h3>
					<div class="p-6 border rounded-lg bg-card flex justify-center">
						<RangeCalendar bind:value={rangeValue} />
					</div>
				</div>

				<div class="bg-muted p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Kullanım</h4>
					<pre class="text-sm"><code>{`<RangeCalendar bind:value={rangeValue} />`}</code></pre>
				</div>
			</div>
		</section>
	</div>
</main>

<style lang="postcss">
	@reference "tailwindcss";
</style>
