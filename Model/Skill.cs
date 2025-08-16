namespace Portfolio.Model;

[Serializable]
public class Skill
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Icon { get; set; }

    public List<string> Keywords { get; set; } = [];
}