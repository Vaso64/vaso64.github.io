namespace Portfolio.Model;

[Serializable]
public record Experience
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Logo { get; set; }
    public string Date { get; set; }
    public string Description { get; set; }
    public List<Link> Links { get; set; }
}